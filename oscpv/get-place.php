<?php
require_once("db_connect.php");
global $db;
$json_data = array();
$item = $_GET["item"];
$query = "select nameFull, id, zone from places where name like '$item%'";
$stmt = mysqli_prepare($db, $query);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $name, $id, $zone_id);
$i= 1;
while (mysqli_stmt_fetch($stmt)) {
  	if ($i++ > 6)
		break;
    $json_data[] = array("name" => $name, "id" => (int) $id, "zone_id" => (int) $zone_id);
}
mysqli_stmt_close($stmt);
mysqli_close($db);
$items = array("items" => $json_data);
header('Content-Type: application/json');
echo json_encode($items, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

