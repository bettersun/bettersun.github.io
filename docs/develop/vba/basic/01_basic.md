# 1. VBA基础

## 1.1 VBA字符

   * 英文大小写字母(不区分大小写）
   * 数字
   * 特殊符号（+、-、*、/、>、<、=、标点等）
   * 汉字（中文版可用，不推荐）

## 1.2 VBA数据类型

### 1.2.1 VBA中的数据类型
 
<table>
	<thead>
		<td><h5>数据类型</h5></td><td><h5>意义</h5></td><td><h5>说明</h5></td>
	</thead>
	<tr>
		<td>Ingeter</td><td>整型</td><td>16位（2个字节）<br/>-32768 ~ 32767<br/>Dim a As Integer(Dim a%) </td>
	</tr>
	<tr>
		<td>Long</td><td>长整型</td><td>32位（4个字节）<br/>-2147483648 ~ 2147483647<br/>Dim a As Long(Dim a&)</td>
	</tr>
	<tr>
		<td>Single</td><td>单精度浮点型</td><td>32位（4个字节）<br/>Dim a As Single(Dim a!) </td>
	</tr>
	<tr>
		<td>Double</td><td>双精度浮点型</td><td>64位（8个字节）<br/>Dim a As Double(Dim a#)</td>
	</tr>
	<tr>
		<td>Currency</td><td>货币型</td><td>Dim a As Currency(Dim a@)</td>
	</tr>
	<tr>
		<td>Byte</td><td>字节型</td><td>8位（1个字节）0 ~ 255</td>
	</tr>
	<tr>
		<td>String</td><td>字符串</td><td>Dim a As String(不定长）<br/>Dim a As String*12(定长）</td>
	</tr>
	<tr>
		<td>Boolean</td><td>布尔型</td><td>只有True和False</td>
	</tr>
	<tr>
		<td>Date</td><td>日期型</td><td>64位（8个字节）<br/>日期：100/01/01 ~ 9999/12/31<br/>时间：0:00:00 ~ 23:59:59</td>
	</tr>
	<tr>
		<td>Object</td><td>对象型</td><td>必须使用Set赋值，不然会报错；<br/>使用Set为Nothing，即销毁对象</td>
	</tr>
	<tr>
		<td>Variant</td><td>变体型</td><td>没有声明类型的变量默认为Variant</td>
	</tr>
</table>

### 1.2.2 自定义数据类型

> 使用Type定义自己的数据类型，和OOP的类不同的是，只能定义成员变量，不能定义方法。  
Type必须在声明部分定义，在使用前定义。
  
~~~
Type Member
  ID As Integer
  Name As String
  Sex As Byte
  BirthDay As Date
  Else As Object
End Type

Sub TestType()
  Dim mem As Member
  
  mem.ID = 12
  mem.name = "BS"
  
  MsgBox mem.ID & " : " & mem.name
End Sub
~~~

### 1.2.3 枚举类型

定义： 公共枚举类型

~~~
Public Enum Weekday
  Monday         '周一
  Tuesday        '周二
  Wendnesday     '周三
  Thursday       '周四
  Friday         '周五
  Saturday       '周六
  Sunday         '周日
End Enum
~~~

定义：私有枚举类型

~~~
Private Enum Direction
  East
  South
  West
  North
End Enum
~~~

使用：

~~~
Sub TestEnum()
  Dim wkd as Weekday
  wkd = Monday
End Sub
~~~

## 1.3 常数

* 数值直接作为常数
* 日期/时间常数
   * #9/12/08# 可能是 2008年9月12号，也可能是2108年9月12号
* 符号常数
	* Const MY_NAME = "BS"
	* Const MY_ID As Integer = 12
* VBA自带常数参考 VBA帮助文件

## 1.4 变量

### 1.4.1 变量声明

> 变量可以不声明直接使用，如果要强制声明，则需要在代码最上方加上如下语句。
  
~~~
Option Explicit
~~~
  
  声明方法，使用Dim来声明变量。
  
~~~
Dim 变量名 [As 数据类型]  
~~~

~~~
Dim a As String
Dim b

a = "BS"
b = 12
~~~

### 1.4.2 变量作用域

 * 局部变量（过程中定义使用）
 * 模块变量（模块中定义使用，在模块的最上方用 Dim 或 Private 定义）
 * 全局变量（应用程序范围内使用，在模块的最上方用 Public 定义）

## 1.5 运算符

### 1.5.1 算术运算

 > +、-(负数或减运算)、*、/、¥（斜杠）(整除)、MOD(取模)、^(指数运算)

### 1.5.2 比较运算

 > =、<>、<、>、<=、>=

  * 不同类型的比较会报错

### 1.5.3 逻辑运算
  > Not、And、Or、Xor、Eqv、Imp

## 1.6 代码注释

### 1.6.1 单行定义多行语句

~~~
Dim id As Integer: name = "BS"
~~~
等于

~~~
Dim id As Integer
name = "BS"
~~~

### 1.6.3 长语句分为多行
> VBA的一行语句最大为1023个字符  
> 可以使用空格加一个下划线，把长的语句分成多行连接

~~~
MsgBox "My Id is " _
       & " 12345. " & vbCrLf & _
       & "My Name is " _
       & "BS."
~~~

### 1.6.2 注释

 * 用单引号注释
 * 用Rem注释,Rem与注释间要有至少有一个空格
 
~~~
Rem ID
Dim id As Integer
' 名字
Dim name As String
~~~ 

### 1.6.3 With

> 对同一对象进行多个操作，可用With语句指定对象，然后省略对象调用相应属性或方法。

~~~
Type Member
  ID As Integer
  Name As String
  Sex As Byte
  BirthDay As Date
  Else As Object
End Type

Sub TestWith()
  Dim mem As Member
  
  With mem
    .ID = 12
    .name = "BS"
  End With
  
  MsgBox mem.ID & " : " & mem.name
End Sub
~~~
