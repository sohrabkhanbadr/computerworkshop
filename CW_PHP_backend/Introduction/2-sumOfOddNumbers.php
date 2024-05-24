<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function sumOfOddNumbers($numbers){
        $sum = 0;
        foreach ($numbers as $number) {
            if ($number % 2 != 0) {
                $sum += $number;
            }
        }
        return $sum;
    }
    echo "sum of odd numbers:". sumOfOddNumbers([1,2,3,4,5]);
    ?>

</body>
</html>