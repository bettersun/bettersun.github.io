# 3. 数组

## 3.1 数组种类
 一维数组 ： 
  <table><tr><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr></table>
  二维数组 ：
  <table>
    <tr><td>0,0</td><td>0,1</td><td>0,2</td><td>0,3</td><td>0,4</td><td>0,5</td></tr>
    <tr><td>1,0</td><td>1,1</td><td>1,2</td><td>1,3</td><td>1,4</td><td>1,5</td></tr>
    <tr><td>2,0</td><td>2,1</td><td>2,2</td><td>2,3</td><td>2,4</td><td>2,5</td></tr>
    <tr><td>3,0</td><td>3,1</td><td>3,2</td><td>3,3</td><td>3,4</td><td>3,5</td></tr>
    <tr><td>4,0</td><td>4,1</td><td>4,2</td><td>4,3</td><td>4,4</td><td>4,5</td></tr>
    <tr><td>5,0</td><td>5,1</td><td>5,2</td><td>5,3</td><td>5,4</td><td>5,5</td></tr>
  </table>
  三维数组、多维数组 ：  
  三维数组 : X坐标、Y坐标、Z坐标表示的三维空间可以理解为三维数组  
  多维数组 : VBA数组最大可达60维，不推荐使用超过三维的多维数组

## 3.2 定义

一维数组 : 
> Dim 数组名称(数组下界 To 数组上界) As 类型

~~~
Dim a(9)
Dim n(10) As Integer
~~~

~~~
Dim s(-9 To 9) As String
~~~
  
多维数组 : 
> Dim 数组名称([第1维数组下界 To] 第1维数组上界，[第2维数组下界 To] 第2维数组上界, ..., [第n维数组下界 To] 第n维数组上界) As 类型

~~~
Dim ss(1 To 9, 1 To 12)
Dim aa(1 To 9, 1 To 10, 1 To 12) As String
~~~

* 数组下界可不指定，默认为0。可通Option Base语句改变默认值。

~~~
Option Base {0 | 1}
~~~

## 3.3 初始化

> 循环初始化  

~~~
Dim b(1 To 9) As Integer
For i = 1 To 9
  b(i) = i * 10
Next
~~~

> Array

~~~
Dim s As Variant
s = Array("a", "b", "c", "d")
~~~

> 数组复制

~~~
Dim b(1 To 9) As Integer
Dim c() As Integer 

For i = 1 To 9
  b(i) = i * 10
Next

c = b
~~~

## 3.4 动态数组

### 3.4.1 动态数组定义

> 1 使用Dim定义无下标的数组  
> 2 使用ReDim重新设定数组长度  

~~~
ReDim [Preserve] 数组名称(数组长度) [As 类型]
~~~
> * 数组长度可为变量
> * 使用Preserve关键字可保持原数组的数据
> * 不能改变维数，可多次改变长度

~~~
Dim b() As Integer
ReDim b(5) As Integer

b(2) = 9
ReDim b(10) As Integer  '未使用Preserver关键字 b(2) = 0

b(2) = 12
ReDim Preserve b(20) As Integer  '使用了Preserver关键字 b(2) = 12
~~~

### 3.4.2 擦除数组

~~~
Erase array1
~~~
> * 对象为定长数组时，擦除后长度不变
> * 对象为变长数组时，擦除后长度为0

## 3.5 数组函数

> 1 LBound(),UBound : 取得数组上下界，省略维数则为第1维

~~~
LBound(数组名称[, 维数])  
UBound(数组名称[, 维数])
~~~

> 遍历数组：

~~~
Sub testSub()
  Dim s(3) As Integer
  Dim i As Integer
  For i = LBound(s) To UBound(s)
    ...
  Next i
End
~~~

> 2 IsArray() : 判断是否是数组

~~~
Dim a() As Integer
Dim b As Integer
IsArray(a)  'True
IsArray(b)  'False
~~~

