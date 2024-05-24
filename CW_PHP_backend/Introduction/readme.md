### توابع مهم و ضروری در PHP

PHP دارای توابع بسیاری است که هر کدام برای کاربردهای خاصی طراحی شده‌اند. در زیر برخی از توابع مهم و پرکاربرد PHP به همراه مثال آورده شده است.

#### 1. **strlen()**
این تابع طول یک رشته را برمی‌گرداند.
```php
$str = "Hello, World!";
echo strlen($str); // خروجی: 13
```

#### 2. **strpos()**
این تابع موقعیت اولین وقوع یک زیررشته در داخل یک رشته را برمی‌گرداند.
```php
$mystring = "Hello, World!";
$findme = "World";
$pos = strpos($mystring, $findme);

if ($pos !== false) {
    echo "The string '$findme' was found in the string '$mystring' at position $pos";
} else {
    echo "The string '$findme' was not found in the string '$mystring'";
}
// خروجی: The string 'World' was found in the string 'Hello, World!' at position 7
```

#### 3. **str_replace()**
این تابع یک زیررشته را در داخل یک رشته با یک زیررشته دیگر جایگزین می‌کند.
```php
$oldStr = "Hello, World!";
$newStr = str_replace("World", "PHP", $oldStr);
echo $newStr; // خروجی: Hello, PHP!
```

#### 4. **array_push()**
این تابع یک یا چند عنصر را به انتهای یک آرایه اضافه می‌کند.
```php
$stack = array("apple", "banana");
array_push($stack, "orange", "grape");
print_r($stack);
// خروجی: Array ( [0] => apple [1] => banana [2] => orange [3] => grape )
```

#### 5. **array_pop()**
این تابع آخرین عنصر یک آرایه را حذف و برمی‌گرداند.
```php
$stack = array("apple", "banana", "orange");
$fruit = array_pop($stack);
echo $fruit; // خروجی: orange
print_r($stack);
// خروجی: Array ( [0] => apple [1] => banana )
```

#### 6. **implode()**
این تابع عناصر یک آرایه را با یک جداکننده مشخص به یک رشته تبدیل می‌کند.
```php
$array = array('Hello', 'World', '!');
$str = implode(" ", $array);
echo $str; // خروجی: Hello World !
```

#### 7. **explode()**
این تابع یک رشته را با استفاده از یک جداکننده به عناصر یک آرایه تبدیل می‌کند.
```php
$str = "Hello,World,!";
$array = explode(",", $str);
print_r($array);
// خروجی: Array ( [0] => Hello [1] => World [2] => ! )
```

#### 8. **json_encode()**
این تابع یک آرایه یا شیء PHP را به یک رشته JSON تبدیل می‌کند.
```php
$data = array("name" => "John", "age" => 30, "city" => "New York");
$json = json_encode($data);
echo $json; // خروجی: {"name":"John","age":30,"city":"New York"}
```

#### 9. **json_decode()**
این تابع یک رشته JSON را به یک آرایه یا شیء PHP تبدیل می‌کند.
```php
$json = '{"name":"John","age":30,"city":"New York"}';
$data = json_decode($json, true);
print_r($data);
// خروجی: Array ( [name] => John [age] => 30 [city] => New York )
```

#### 10. **in_array()**
این تابع بررسی می‌کند که آیا یک مقدار مشخص در یک آرایه وجود دارد یا خیر.
```php
$fruits = array("apple", "banana", "orange");
if (in_array("banana", $fruits)) {
    echo "Banana is in the array";
} else {
    echo "Banana is not in the array";
}
// خروجی: Banana is in the array
```

#### 11. **array_merge()**
این تابع دو یا چند آرایه را ترکیب کرده و یک آرایه جدید ایجاد می‌کند.
```php
$array1 = array("color" => "red", 2, 4);
$array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);
$result = array_merge($array1, $array2);
print_r($result);
// خروجی: Array ( [color] => green [0] => 2 [1] => 4 [2] => a [3] => b [shape] => trapezoid [4] => 4 )
```

#### 12. **array_keys()**
این تابع تمام کلیدهای یک آرایه را برمی‌گرداند.
```php
$array = array("color" => "red", "size" => "medium", "shape" => "circle");
$keys = array_keys($array);
print_r($keys);
// خروجی: Array ( [0] => color [1] => size [2] => shape )
```

#### 13. **is_array()**
این تابع بررسی می‌کند که آیا یک متغیر آرایه است یا خیر.
```php
$var = array(1, 2, 3);
if (is_array($var)) {
    echo "It's an array";
} else {
    echo "It's not an array";
}
// خروجی: It's an array
```

#### 14. **empty()**
این تابع بررسی می‌کند که آیا یک متغیر خالی است یا خیر.
```php
$var = "";
if (empty($var)) {
    echo "Variable is empty";
} else {
    echo "Variable is not empty";
}
// خروجی: Variable is empty
```

#### 15. **isset()**
این تابع بررسی می‌کند که آیا یک متغیر تنظیم شده است و مقدار آن نال نیست.
```php
$var = "Hello";
if (isset($var)) {
    echo "Variable is set";
} else {
    echo "Variable is not set";
}
// خروجی: Variable is set
```

### نتیجه‌گیری
این توابع تنها بخشی از توابع پرکاربرد PHP هستند که در برنامه‌نویسی روزمره بسیار مورد استفاده قرار می‌گیرند. آشنایی و تسلط بر این توابع می‌تواند به شما کمک کند تا کدهای کارآمدتر و بهینه‌تری بنویسید. برای یادگیری بیشتر، مستندات رسمی PHP همواره یک منبع خوب و جامع است.
