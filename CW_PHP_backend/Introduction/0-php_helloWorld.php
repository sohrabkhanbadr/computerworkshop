<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    $name = "Sohrab";
    echo "<h1>Hello World!".$name."</h1>";
    // comment
    ?>

    <?php
    echo $name;
    ?>

    <?php
    // Array
    $fruit = array("apple","banana","orange");
    // var_dump($fruit);
    // echo $fruit[2];
    foreach ($fruit as $key => $value) {
        # code...
        echo $key . " ::" . $value;
    }
    ?>
    
</body>
</html>