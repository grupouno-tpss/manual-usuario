import React from "react";

class DescripcionSistema extends React.Component {
    render() {
        return (
            <div>
                <h4 id="item1">Descripción del sistema</h4>
                <hr /><br />
                <h5 id="item-1-1">Objeto</h5>
                <p>
                    El presente documento es una guía de navegación para el usuario, en donde se presentan las principales funcionalidades del sistema de reservas Ichiraku; los apartados son visitas guiadas, en donde se indica el proceso a seguir para los procesos de registro, inicio de sesión, reserva, gestión de reservas, gestión de usuarios, modificación de perfil, generación de informes, consultas de tablas, entre otros, a donde, según el rol de usuario, se puede acceder a dicha información.
                </p>

                <h5 id="item-1-2">Alcance</h5>
                <p>
                    En este documento, podremos ver cómo, con la implementación del software en el restaurante, ayuda a tener una mejor implementación de su sistema de trabajo, logrando sistematizar los procesos de reserva. También podremos ver el cambio en la afluencia de personas, con el nuevo sistema de reservas en el cual podrán incluso reservar en el siguiente punto en caso de no tener reserva en este lugar
                    Los requisitos que satisfacen mayormente el sistema SRI son los siguientes:
                </p>

                <ul>
                    <li>
                        Permitir al usuario con rol de administrador crear, leer, eliminar y actualizar tanto las reservaciones hechas por los usuarios como los menús disponibles, horas y fechas.
                    </li>
                    <li>
                        Interfaces con buen diseño y sencillas de utilizar para el cliente.
                    </li>
                    <li>
                        Modelos visuales (interfaces) que sean sencillos y muestran con efectividad la información que se quiere obtener o revisar.
                    </li>
                    <li>
                        Permitir a los usuarios con roles que tengan permisos modificar las reservaciones en las funciones como: archivar y actualizar.
                    </li>
                    <li>
                        Permitir a los usuarios con rol de administrador las siguientes funciones: eliminar cuentas de usuarios, crear cuentas de usuario con cualquier rol y modificar la información de las cuentas registradas en la base de datos.
                    </li>
                </ul>
                <strong>
                    Las principales restricciones que el sistema tiene en cuenta son:
                </strong>
                <ul>
                    <li>Sistema de logeo o de permisos mediante roles para las diferentes funciones que se requieren.</li>
                    <li>Reorganización de horarios respecto a los procesos de reservación por parte de los usuarios clientes.</li>
                    <li>Existencia de cuentas de usuario para los clientes que deseen realizar una o más reservaciones por medio del sistema SRI.</li>
                    <li>Generación de informe automático según el tiempo que lo requiera el administrador o la persona que cuente con este rol.</li>
                </ul>

                <h5 id="item-1-3">Funcionalidad</h5>
                <p>
                    Aplicar un sistema de gestión capaz de automatizar horarios, disponibilidad y organización de los tiempos de acuerdo con las diversas reservaciones generadas por las distintas redes sociales y página web de la cadena de restaurantes. Adicionalmente a esto, el sistema SRI está pensado para solucionar problemas con respecto a la cantidad de reservaciones de los restaurantes o cadena de restaurantes de la empresa Ichiraku Ramen, pretendiendo optimizar el funcionamiento por medio de algoritmos de un sistema de información. Los actores principales que se pretende actúen en el sistema y que son los beneficiarios más directos son:
                </p>
                <ul>
                    <li>El usuario o cliente</li>
                    <li>Sección de recepción o la (el) recepcionista</li>
                    <li>Usuario con rol de administrador</li>
                </ul>
                <strong>
                    Estos actores cuentan con roles para que el mismo sistema administre permisos según su rol.
                </strong>
            </div>
        );
    }
}

export default DescripcionSistema;