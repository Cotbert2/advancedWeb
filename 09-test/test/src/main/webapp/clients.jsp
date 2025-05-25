<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Clientes</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-10">

    <div class="mb-4">
        <button onclick="openModal('createModal')" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Crear Cliente</button>
    </div>

    <table class="w-full bg-white rounded shadow">
        <thead>
            <tr class="bg-gray-200 text-left">
                <th class="p-3">ID</th>
                <th class="p-3">Nombre</th>
                <th class="p-3">Apellido</th>
                <th class="p-3">Edad</th>
                <th class="p-3">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="client" items="${clients}">
                <tr class="border-t">
                    <td class="p-3">${client.id}</td>
                    <td class="p-3">${client.name}</td>
                    <td class="p-3">${client.lastName}</td>
                    <td class="p-3">${client.age}</td>
                    <td class="p-3 space-x-2">
                        <button onclick="openModal('editModal-${client.id}')" class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Editar</button>
                        <button onclick="openModal('deleteModal-${client.id}')" class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Eliminar</button>
                    </td>
                </tr>

                <!-- Modal Editar -->
                <div id="editModal-${client.id}" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
                    <div class="bg-white p-6 rounded shadow w-96">
                        <h2 class="text-xl mb-4 font-semibold">Editar Cliente</h2>
                        <form method="post" action="Client">
                            <input type="hidden" name="action" value="update"/>
                            <input type="hidden" name="id" value="${client.id}" />
                            <input class="w-full mb-2 p-2 border" type="text" name="name" value="${client.name}" placeholder="Nombre"/>
                            <input class="w-full mb-2 p-2 border" type="text" name="lastname" value="${client.lastName}" placeholder="Apellido"/>
                            <input class="w-full mb-2 p-2 border" type="email" name="email" value="${client.email}" placeholder="Email"/>
                            <input class="w-full mb-2 p-2 border" type="number" name="age" value="${client.age}" placeholder="Edad"/>
                            <input class="w-full mb-2 p-2 border" type="text" name="address" value="${client.address}" placeholder="Dirección"/>
                            <div class="flex justify-end space-x-2 mt-4">
                                <button type="button" onclick="closeModal('editModal-${client.id}')" class="bg-gray-400 px-3 py-1 rounded">Cancelar</button>
                                <button type="submit" class="bg-blue-600 text-white px-3 py-1 rounded">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Modal Eliminar -->
                <div id="deleteModal-${client.id}" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
                    <div class="bg-white p-6 rounded shadow w-80">
                        <h2 class="text-xl mb-4 font-semibold">¿Eliminar cliente?</h2>
                        <p class="mb-4">ID: ${client.id} - ${client.name} ${client.lastName}</p>
                        <form method="post" action="Client">
                            <input type="hidden" name="action" value="delete"/>
                            <input type="hidden" name="id" value="${client.id}"/>
                            <div class="flex justify-end space-x-2">
                                <button type="button" onclick="closeModal('deleteModal-${client.id}')" class="bg-gray-400 px-3 py-1 rounded">Cancelar</button>
                                <button type="submit" class="bg-red-600 text-white px-3 py-1 rounded">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </c:forEach>
        </tbody>
    </table>

    <!-- Modal Crear -->
    <div id="createModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white p-6 rounded shadow w-96">
            <h2 class="text-xl mb-4 font-semibold">Crear Cliente</h2>
            <form method="post" action="Client">
                <input type="hidden" name="action" value="create"/>
                <input class="w-full mb-2 p-2 border" type="text" name="name" placeholder="Nombre"/>
                <input class="w-full mb-2 p-2 border" type="text" name="lastname" placeholder="Apellido"/>
                <input class="w-full mb-2 p-2 border" type="email" name="email" placeholder="Email"/>
                <input class="w-full mb-2 p-2 border" type="number" name="age" placeholder="Edad"/>
                <input class="w-full mb-2 p-2 border" type="text" name="address" placeholder="Dirección"/>
                <div class="flex justify-end space-x-2 mt-4">
                    <button type="button" onclick="closeModal('createModal')" class="bg-gray-400 px-3 py-1 rounded">Cancelar</button>
                    <button type="submit" class="bg-green-600 text-white px-3 py-1 rounded">Crear</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }
    </script>
</body>
</html>
