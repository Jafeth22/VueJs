<?php
class BaseDatos
{
    private function abrirConexion()
    {
        $servidor = "localhost";
        $usuario = "pruebasMySQL";
        $contrasena = "123";
        $basededatos = "PRUEBAS_BD";
        
        $conexion = mysqli_connect($servidor, $usuario, $contrasena) or die("No se ha podido conectar al servidor de Base de datos") . "<br />";

        $db = mysqli_select_db($conexion, $basededatos) or die("No se ha podido conectar a la Base de Datos indicada, verifique e intente nuevamete.") . "<br />";
        return $conexion;
    }

    private function cerrarConexion($conexion)
    {
        mysqli_close($this->$conexion);
    }

    public function ejecutarSP($nombreSP)
    {
        $consulta = "CALL $nombreSP();";
        $resultado = mysqli_query($this->abrirConexion(), $consulta) or die("Algo ha ido mal en la consulta a la base de datos");
        $rawdata = [];
        //while ($row = mysqli_fetch_array($resultado)) { //Devuelve tanto el número como el asociativo del resultado en forma de array
        while ($row = mysqli_fetch_assoc($resultado)) {   //Devuelve solamente un array de asociativo
            $rawdata[] = $row;
        }

        return json_encode($rawdata);
    }
}
