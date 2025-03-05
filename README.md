<div style="background-color: #4B69FD; padding: 10px;">
    <img src="https://github.com/RamosMel/amigoSecreto/blob/main/assets/amigo-secreto.png?raw=true" alt="Texto alternativo" />
</div>
<h1 align="center"> Amigo Secreto </h1>

:construction: Estado del proyecto: en construcción :construction:

# :paperclip: Descripción

Amigo Secreto es una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

# :hammer: Funcionalidades

* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

* Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

* Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

# :books: Lo aprendido

* Crear un array para almacenar los nombres.

* Crear una función que recorra el array amigos agregando cada nombre como un elemento <li> dentro de una lista HTML.

* Obtener el elemento de la lista utilizando document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

* Limpiar la lista existente estableciendo lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

* Iterar sobre el arreglo usando un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

* Escribir una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usando Math.random() y Math.floor() para obtener un índice aleatorio.

* Validar que haya amigos disponibles antes de sortear, comprobando que el array amigos no esté vacío.

* Generar un índice aleatorio usando Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

* Obtener el nombre sorteado utilizando el índice aleatorio para acceder al nombre correspondiente en el arreglo.

* Mostrar el resultado actualizando el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

* Crear y actualizar un repositirio en GitHub para subir el proyecto. Actualizandolo remotamente con los comandos Git.

* Escribir y dar formato al archivo README.md


# :mailbox_with_no_mail: Contacto
Mail: [ramosmel@gmail.com](mailto:ramosmel@gmail.com)