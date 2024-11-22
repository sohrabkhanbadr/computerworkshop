<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
    function countDuplicateCharacters($string) {
        $characters = str_split($string);
        $counts = array_count_values($characters);
        $duplicates = 0;
        foreach ($counts as $count) {
            if ($count > 1) {
                $duplicates++;
            }
        }
        return $duplicates;
    }
    echo "تعداد حروف تکراری: " . countDuplicateCharacters("Hello"); 
    
    
    ?>

</body>
</html>