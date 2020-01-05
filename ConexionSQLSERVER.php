<?php
$serverName = "DESKTOP-IBHFQTO\SQLEXPRESS";
$connectionOptions = array(
    "Database" => "PRUEBAS_BD",
    "UID" => "pruebasSQLServer", "PWD" => "123"
);

$conn = sqlsrv_connect($serverName, $connectionOptions) or die("No se ha podido conectar al servidor de Base de datos") . "<br />";
echo "<br>";

$consulta = "SELECT * FROM dbo.personas";
$params = array(1, "");
$resultado = sqlsrv_query($conn, $consulta) or die("Algo ha ido mal en la consulta a la base de datos");

echo "<table borde='2'>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>1° Apellido</th>";
echo "</tr>";
while ($columna = sqlsrv_fetch_array($resultado)) {
    echo "<tr>";
    echo "<td>" . $columna['nombre'] . "</td><td>" . $columna['apellido1'] . "</td>";
    echo "</tr>";
}
echo "</table>";

sqlsrv_close( $conn );