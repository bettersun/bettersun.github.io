# 4. 过程

## 4.1 Sub过程

### 4.1.1 定义
> Sub过程： 执行一系列处理，无返回值，可以被宏调用

~~~
[Public | Private | Friend] [Static] Sub 过程名称([参数列表])
  语句
  [Exit Sub]
  语句
End Sub
~~~

> * Public/Private : 共有/私有
> * Friend : 类模块中使用，整个工程可见，对象实例不可见
> * Static : 调用后仍保留Sub局部变量的值
> * 参数列表 : 参数之间以逗号隔开

~~~
Sub testSub(a As Integer, b As String)
  MsgBox "a = " & a & " b = " & b 
End Sub
~~~

### 4.1.2 调用

> 1 使用Call调用，参数列表需要加括号  
> 2 不使用Call调用，此时参数列表不可加括号  

~~~
Call 过程名称(参数列表)  
~~~

~~~
Call testSub(12, "BS")
~~~

~~~
Call testSub2
~~~

~~~
testSub 12, "BS"
~~~

## 4.2 Function函数

### 4.2.1定义

> Function函数： 执行一系列处理有返回值，需要在Sub中调用，不能被宏调用

~~~
[Public | Private | Friend] [Static] Function 函数名称([参数列表]) [As 返回结果类型]
  语句
  函数名称 = 返回结果
  [Exit Function]
  语句
  函数名称 = 返回值结果
End Function
~~~

> * 各结构与Sub过程类似
> * 通过给函数名称赋值返回结果，如果不赋值，数值函数返回0，字符函数返回空字符串

~~~
Sub testFunction(a As Integer, b As String) As String
  testFunction = "result : " & a & " " & b 
End Function
~~~

### 4.2.2 调用

> 1. 在工作表使用【插入函数】中调用
> 2. 在Sub过程或者Function函数中调用

~~~
Sub testSub(a As Integer, b As String)
	Dim s As String
	s = testFunction(a, b)
	
	MsgBox "result : " & s
End Sub
~~~

## 4.3 参数

### 4.3.1 参数传递

> 定义:

~~~
Function testFunc(a1 As Integer, b2 As Integer, c3 As String)
  ...
End Function
~~~

> 调用:

~~~
'直接调用，位置对应
testFunc 1, 2, "BS"
~~~

~~~
'Call调用，位置对应
Call testFunc(1, 2, "BS")
~~~

~~~
'Call参数指定
Call testFunc(a1:=1, b2:=2, c3:="BS")
~~~

~~~
'Call参数指定
Call testFunc(c3:="BS", a1:=1, b2:=2)
~~~

~~~
'Call位置指定和参数指定混合，位置指定参数必须在最前面
Call testFunc(1, b2:=2, c3:="BS")
~~~

### 4.3.2 传递方式

> 值传递，使用ByVal关键字, 传递的值会被复制一份，处理内部对参数的改变不影响调用外部变量的值

~~~
Sub testSub1(ByVal a As Integer)
  a = a * 10
  Debug.Print "sub1 : a = " & a
End Sub

Sub testSub2()
  Dim a As Integer
  a = 12
  Debug.Print "before : a = " & a
  Call testSub1(a)
  Debug.Print "after : a = " & a
End Sub
~~~

> * 执行结果：  
> before : a = 12  
> sub1 : a = 120  
> after : a = 12

=

> 引用传递，VBA的默认传值方式，使用ByRef关键字，也可省略ByRef关键字。实际传递参数是表达式或者常量时，不能按引用传递参数

~~~
Sub testSub1(ByRef a As Integer)
  a = a * 10
  Debug.Print "sub1 : a = " & a
End Sub

Sub testSub2()
  Dim a As Integer
  a = 12
  Debug.Print "before : a = " & a
  Call testSub1(a)
  Debug.Print "after : a = " & a
End Sub
~~~

> * 执行结果：  
> before : a = 12  
> sub1 : a = 120  
> after : a = 120

### 4.3.3 数组参数

> 数组是引用传递

~~~
Sub testSub1(s() As String)
  Dim i As Integer
  For i = 1 To UBound(s) - LBound(s)
    Debug.Print "s(" & i & ") : " & i
  Next i
End Sub

Sub testSub2()
  Dim s(3) As Integer
  s(1) = "B"
  s(2) = "S"
  s(3) = "N"
  
  Call testSub1(s)
End Sub
~~~
> * 执行结果：  
> s(1) : B  
> s(2) : S  
> s(3) : N  

### 4.3.4 可选参数

> 参数前使用关键字Optional, 可选参数必须放在最后

=

> 定义:

~~~
Function testFunc(a1 As Integer, b2 As Integer, Optional c3 As String)
  ...
End Function
~~~

> 调用:

~~~
Call testFunc(1, 2)
~~~

~~~
Call testFunc(1, 2, "BS")
~~~

### 4.3.5 可变参数

> 在最后一个参数前加上关键字ParamArray, 可接受任意个数个参数  
>
> * 不能与ByVal, ByRef或者Optional一起使用, 可省略实际传递参数  
> * 对应参数类型必须为Variant数组

=

> 定义:

~~~
Function testFunc(len As Integer, ParamArray num())
  ...
End Function
~~~

> 调用:

~~~
Call testFunc(1)
~~~

~~~
Call testFunc(1, 11, 12, 13, 14, 15, 16)
~~~

## 4.4 递归

> 递归： 过程或函数调用自身或者两个过程或函数互相调用  
> 
> * 需要结束递归的条件  
> * 递归都可使用循环代替
> * 内存使用较高

=
> 阶乘  

~~~
Function fac(ByVal n As Integer) As Integer
  If n <= 1 Then
    Return 1
  End If
  
  Return fac(n - 1) * n
End Function
~~~