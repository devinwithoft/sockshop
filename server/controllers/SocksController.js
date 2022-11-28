import { response } from "express";
import { socksService } from "../services/SocksService.js";
import BaseController from "../utils/BaseController.js";


export class SocksController extends BaseController {
    constructor() {
        super('api/socks')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.createSock)
            .delete('/:id', this.removeOne)
            .put('/:id', this.editSock)
    }

    async getAll(request, response, next) {
        try {
            const socks = await socksService.getAll()
            return response.send(socks)
        } catch (error) {
            next(error)
        }
    }

    async getOne(request, response, next) {
        try {
            const socks = await socksService.getOne(request.params.id)
            return response.send({ socks })
        } catch (error) {
            next(error)
        }
    }

    async removeOne(request, responce, next) {
        try {
            const message = await socksService.removeOne(request.params.id)
            return responce.send(message)
        } catch (error) {
            next(error)
        }
    }

    async createSock(req, res, next) {
        try {
            const newSock = await socksService.createSock(req.body)
            return res.send(newSock)
        } catch (error) {
            next(error)
        }
    }

    async editSock(req, res, next) {
        try {
            const editSock = await socksService.editSock(req.params.id, req.body59)
            return res.send(editSock)
        } catch (error) {
            next(error)
        }
    }
}