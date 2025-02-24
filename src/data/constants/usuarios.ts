import Usuario from "../model/Usuario";
import { v4 as uuid } from 'uuid';


const usuarios: Usuario[] = [
    { id: uuid(), login: 'Fortes', senha: '123', status: 'ativo', email: 'fortes@example.com', data_cadastro: '2024-01-01' },
    { id: uuid(), login: 'user02', senha: 'senha456', status: 'ativo', email: 'user02@example.com', data_cadastro: '2024-01-02' },
    { id: uuid(), login: 'user03', senha: 'senha789', status: 'inativo', email: 'user03@example.com', data_cadastro: '2024-01-03' },
    { id: uuid(), login: 'user04', senha: 'senha101', status: 'ativo', email: 'user04@example.com', data_cadastro: '2024-01-04' },
    { id: uuid(), login: 'user05', senha: 'senha202', status: 'inativo', email: 'user05@example.com', data_cadastro: '2024-01-05' },
    { id: uuid(), login: 'user06', senha: 'senha303', status: 'ativo', email: 'user06@example.com', data_cadastro: '2024-01-06' },
    { id: uuid(), login: 'user07', senha: 'senha404', status: 'ativo', email: 'user07@example.com', data_cadastro: '2024-01-07' },
    { id: uuid(), login: 'user08', senha: 'senha505', status: 'inativo', email: 'user08@example.com', data_cadastro: '2024-01-08' },
    { id: uuid(), login: 'user09', senha: 'senha606', status: 'ativo', email: 'user09@example.com', data_cadastro: '2024-01-09' },
    { id: uuid(), login: 'user10', senha: 'senha707', status: 'ativo', email: 'user10@example.com', data_cadastro: '2024-01-10' },
    { id: uuid(), login: 'user11', senha: 'senha808', status: 'ativo', email: 'user11@example.com', data_cadastro: '2024-01-11' },
    { id: uuid(), login: 'user12', senha: 'senha909', status: 'inativo', email: 'user12@example.com', data_cadastro: '2024-01-12' },
    { id: uuid(), login: 'user13', senha: 'senha010', status: 'ativo', email: 'user13@example.com', data_cadastro: '2024-01-13' },
    { id: uuid(), login: 'user14', senha: 'senha111', status: 'ativo', email: 'user14@example.com', data_cadastro: '2024-01-14' },
    { id: uuid(), login: 'user15', senha: 'senha222', status: 'ativo', email: 'user15@example.com', data_cadastro: '2024-01-15' },
    { id: uuid(), login: 'user16', senha: 'senha333', status: 'inativo', email: 'user16@example.com', data_cadastro: '2024-01-16' },
    { id: uuid(), login: 'user17', senha: 'senha444', status: 'ativo', email: 'user17@example.com', data_cadastro: '2024-01-17' },
    { id: uuid(), login: 'user18', senha: 'senha555', status: 'ativo', email: 'user18@example.com', data_cadastro: '2024-01-18' },
    { id: uuid(), login: 'user19', senha: 'senha666', status: 'inativo', email: 'user19@example.com', data_cadastro: '2024-01-19' },
    { id: uuid(), login: 'user20', senha: 'senha777', status: 'ativo', email: 'user20@example.com', data_cadastro: '2024-01-20' }
];

export default  usuarios;