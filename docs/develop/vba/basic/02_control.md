# 2. 程序控制结构

## 2.1 顺序结构

### 2.1.1 InputBox

  > 使用InputBox函数，显示输入对话框  
    使用Application对象的Input方法显示输入对话框
 
 ~~~
 InputBox (promt[,title][,default][,xpos][,ypos][,helpfile,context]）
 ~~~
 
  * prompt: 显示字符串
  * title: 标题(可略)
  * default: 文本框的默认字符串(可略)
  * xpos, ypos: 对话框左上角位置，成对出现(可略)
  * helpfile: 帮助文件(可略)
  * context: 帮助主题编号(可略)

~~~
Dim s As String
s = InputBox("Please input your name : ", "Message", "Default Name")
~~~

### 2.1.2 MsgBox

  > 使用MsgBox函数打开信息对话框

~~~
Value = MsgBox(prompt[,buttons][,title][,helpfile,context]) 
~~~

<table>
  <thead>
    <td> 常量 </td>
    <td> 值 </td>
    <td>说明</td>
  </thead>
  <tr>
    <td> vbOkOnly </td>
    <td> 0 </td>
    <td> 只显示确定(OK)按钮 </td>
  </tr>
  <tr>
    <td> vbOkCancel </td>
    <td> 1 </td>
    <td> 显示确定(OK)及取消(Cancel)按钮 </td>
  </tr>
  <tr>
    <td> vbAbortRetryIgnore </td>
    <td> 2 </td>
    <td> 显示异常终止(Abort)、重试(Retry)、忽略(Ignore)按钮 </td>
  </tr>
  <tr>
    <td> vbYesNoCancel </td>
    <td> 3 </td>
    <td> 显示是(Yes)、否(No)、取消(Cancel)按钮 </td>
  </tr>
  <tr>
    <td> vbYesNo </td>
    <td> 4 </td>
    <td> 显示是(Yes)、否(No)按钮 </td>
  </tr>
  <tr>
    <td> vbRetryCancel </td>
    <td> 5 </td>
    <td> 显示重试(Retry)、取消(Cancel)按钮  </td>
  </tr>
  <tr>
    <td> vbCritical </td>
    <td> 16 </td>
    <td> 显示致命错误图标 </td>
  </tr>
  <tr>
    <td> vbQuestion </td>
    <td> 32 </td>
    <td> 显示问号图标 </td>
  </tr>
  <tr>
    <td> vbExclamation </td>
    <td> 48 </td>
    <td> 显示警告图标 </td>
  </tr>
  <tr>
    <td> vbInformation </td>
    <td> 64 </td>
    <td> 显示信息图标 </td>
  </tr>
  <tr>
    <td> vbDefaultButton1 </td>
    <td> 0 </td>
    <td> 第1个按钮设为默认按钮 </td>
  </tr>
  <tr>
    <td> vbDefaultButton2 </td>
    <td> 256 </td>
    <td> 第2个按钮设为默认按钮 </td>
  </tr>
  <tr>
    <td> vbDefaultButton3 </td>
    <td> 512 </td>
    <td> 第3个按钮设为默认按钮 </td>
  </tr>
  <tr>
    <td> vbDefaultButton4 </td>
    <td> 768 </td>
    <td> 第4个按钮设为默认按钮 </td>
  </tr>
  <tr>
    <td> vbApplicationModal </td>
    <td> 0 </td>
    <td> 进入消息框，当前应用程序停止 </td>
  </tr>
  <tr>
    <td> vbSystemModal </td>
    <td> 4096 </td>
    <td> 进入消息框，所有就有程序停止 </td>
  </tr>
</table>


> MsgBox的返回值：  
> * vbOK : 1, 点击确定
> * vbCancel : 2, 点击取消
> * vbAbort : 3, 点击终止
> * vbRetry : 4, 点击重试
> * vbIgnore : 5, 点击忽略
> * vbYes : 6, 点击是
> * vbNo : 7, 点击否

~~~
Dim valMsg as Integer
valMsg = MsgBox("Do you want to learn VBA?", vbYesNo + vbQuestion, "Q")
If valMsg = vbYes Then
  MsgBox "Let us begin."
End if
~~~

## 2.2 选择结构

### 2.2.1 单分支 : If...Then

> If...Then... 写在一行可以省略End If.

单行：

~~~
If ID = 12 Then name = "BS"
~~~

多行：

~~~
If ID = 12 Then
  ID = 9
  name = "BS"
End If
~~~

### 2.2.2 双分支 : If ... Then ... Else

~~~
If ID = 12 Then
  name = "BS"
Else
  name = "Beyond"
End If
~~~

### 2.2.3 多分支 : If ... Then ... ElseIf

~~~
If ID = 12 Then
  name = "BS"
ElseIf ID = 9 Then
  name = "Beyond"
Else
  name = "Warrior"
End If
~~~

### 2.2.4 多分支 : Select Case

~~~
Select Case strTest
Case "1"
  strName = "BS"
Case "2"
  strName = "Beyond"
Case "3"
  strName = "Warrior"
Case Else
  strName = ""
End Select
~~~

## 2.3 循环结构

### 2.3.1 For...Next
~~~
For 循环变量 = 开始值 To 终止值 [Step 步长]
   语句
   [Exit For]
   语句
Next [循环变量]

或

For Each 元素 In 集合(数组)
   语句
   [Exit For]
   语句
Next
~~~

~~~
For i = 1 To 9 Step 1
   ...
Next

或

For Each s In sList
   ...
Next
~~~

### 2.3.2 Do...Loop

> 1 先判断条件表达式，为True则执行循环体，为False则执行循环语句下面的语句

~~~
Do While 条件表达式
  语句
  [Exit Do]
  语句
Loop
~~~

> 2 先执行循环体，再判断条件表达式。循环体至少被执行一次

~~~
Do
  语句
  [Exit Do]
  语句
Loop While 条件表达式
~~~

> 3 条件表达式为False时执行循环体

~~~
Do Util 条件表达式
  语句
  [Exit Do]
  语句
Loop
~~~

> 4 先执行循环体，再判断条件表达式，条件表达式为False执行循环体。循环体至少被执行一次。

~~~
Do
  语句
  [Exit Do]
  语句
Loop Util 条件表达式
~~~

### 2.3.3 多重循环

~~~
Dim i As Integer
Dim j As Integer

For i = 1 To 10
  For j = 1 To 10
    ...
  Next j
Next i
~~~