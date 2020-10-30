<?php
  
  sleep(3);

  //echo $_REQUEST['username'];

  foreach ($_POST as $key => $value) {
    echo htmlspecialchars($key).": ".htmlspecialchars($value)."\n";
  }

?>