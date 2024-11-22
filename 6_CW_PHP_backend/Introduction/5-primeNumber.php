<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function isPrime($number){
        if ($number <= 1) {
            return false;
        }
        for ($i=2; $i < $number ; $i++) { 
            if ($number % $i == 0) {
                return false;
            }
        return true;
        }
    }
    echo isPrime(18) ? "is prime" : "is not prime";
    ?>

</body>
</html>