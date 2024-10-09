import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent {
  usuario = {
    nome: '',
    email: '',
    senha: '',
  };

  cadastrarUsuario() {
    // Aqui você pode adicionar a lógica para lidar com o cadastro do usuário
    console.log('Usuário cadastrado:', this.usuario);
  }
}