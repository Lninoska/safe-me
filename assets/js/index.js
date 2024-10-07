function presentar() {
    var name = document.getElementById ("name").value;
    var email = document.getElementById ("email").value;
    var work = document.getElementById ("work").value;
    var phone = document.getElementById ("phone").value;
    var message = document.getElementById ("bio").value;


        class usuario {
            constructor(name, email, work, phone, message)  {
                this.name = name
                this.email = email
                this.work = work
                this.phone = phone
                this.message = message
            }
        }
    var nuevousuario = new usuario (name, email, work, phone, message);

    document.getElementById("nombre").innerText = nuevousuario.name;
    document.getElementById("correo").innerText = nuevousuario.email;
    document.getElementById("trabajo").innerText = nuevousuario.work;
    document.getElementById("telefono").innerText = nuevousuario.phone;
    document.getElementById("sobreMi").innerText = nuevousuario.message;
    
}