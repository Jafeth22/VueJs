<?php
$servidor = "localhost";
$usuario = "pruebasMySQL";
$contrasena = "123";
$basededatos = "PRUEBAS_BD";

$conexion = mysqli_connect($servidor, $usuario, $contrasena) or die("No se ha podido conectar al servidor de Base de datos") . "<br />";

$db = mysqli_select_db($conexion, $basededatos) or die("Upps! Pues va a ser que no se ha podido conectar a la base de datos") . "<br />";

$consulta = "SELECT * FROM personas";

$resultado = mysqli_query($conexion, $consulta) or die("Algo ha ido mal en la consulta a la base de datos");
mysqli_close( $conexion );

echo "<table borde='2'>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>1° Apellido</th>";
echo "</tr>";
while ($columna = mysqli_fetch_array($resultado)) {
    echo "<tr>";
    echo "<td>" . $columna['nombre'] . "</td><td>" . $columna['apellido1'] . "</td>";
    echo "</tr>";
}
echo "</table>";
