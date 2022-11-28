import { DbConnection } from "../db/DbConfig.js"
import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"

class SocksService {
    async getAll() {
        const socks = await dbContext.Socks
        return socks
    }

    async getOne(sockId) {
        const sock = await dbContext.Socks.find(s => s.id == sockId)
        if (!sock) throw new BadRequest('no sock here')
        return sock
    }

    async removeOne(sockId) {
        const sock = await this.getOne(sockId)
        let index = dbContext.Socks.indexOf(sock)
        dbContext.Socks.splice(index, 1)
        return `${sock.name} have been deleted`
    }

    async createSock(newSock) {
        logger.log(newSock)
        newSock.id = dbContext.Socks[dbContext.Socks.length - 1].id + 1
        await dbContext.Socks.push(newSock)
        return newSock
    }

    async editSock(sockId, sockBody) {
        let sock = await this.getOne(sockId)
        let index = dbContext.Socks.indexOf(sock)
        sockBody.id = sock.id
        dbContext.Socks.splice(index, 1)
        dbContext.Socks.push(sockBody)
        return `${sock.name} editted`
    }
}




export const socksService = new SocksService()