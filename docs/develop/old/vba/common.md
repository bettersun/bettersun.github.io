## 共通

**方法一览**

* 启动时自动执行
* Excel的列名转换成数字
* 整数值转换为Excel的列名
* 下划线连接字符串转换为骆驼命名字符串
* 骆驼命名字符串转换为下划线连接字符串

-

### 启动时自动执行

~~~
'启动时自动执行
Sub auto_open()
    MsgBox "Welcome to BS_VBA"
End Sub
~~~

### Excel的列名转换成数字

> 相关常量定义

~~~
' 字母的个数
Public Const CHAR_CNT As Integer = 26
~~~

> 函数定义

~~~
' Excel的列名转换成数字
'
'   功能：
'     Excel的列名转换成数字
'     无法正常转换的场合，返回-1
'
'   参数：
'     colChar : Excel列名 (A、ZZ 等)
'
'   例：
'     AZ => 52
'     BA => 53
'     ZZ => 702
'     AAA => 703
Public Function getColIdx(colChar As String)
    
    ' 返回值
    Dim idx As Integer
    ' 临时值
    Dim tmp As Integer

    ' 循环变量
    Dim i As Integer
    Dim j As Integer

    ' 字符串长度
    Dim ln As Integer
    
    ' 各位字符
    Dim chr() As String
    ' Ascii码
    Dim nChr() As Integer
    ' Acsiic码取得字母顺序
    Dim tmpN() As Integer
    
    ln = Len(colChar)

    ReDim chr(ln) As String
    ReDim nChr(ln) As Integer
    ReDim tmpN(ln) As Integer
  
    For i = 1 To ln
        ' 各位字母, 转换为大写
        chr(i) = Mid(colChar, i, 1)
        chr(i) = UCase(chr(i))
        ' Ascii码
        nChr(i) = Asc(chr(i))
        ' Acsiic码取得字母顺序
        tmpN(i) = nChr(i) - 65 + 1
    Next i
  
    ' Error字符则退出,返回-1
    ' * 性能非最优
    For i = 1 To ln
        If nChr(i) < 65 Or nChr(i) > 90 Then
            Debug.Print "Error!"
            getColIdx = -1
            Exit Function
        End If
    Next i

    ' 从高位(左边)开始循环
    ' 列名ABC = >
    '     26的2次方乘以A的Ascii码的字母顺序
    '     + 26的1次方乘以B的Ascii码的字母顺序
    '     + 26的0次方*C的Ascii码的字母顺序
    j = 0
    For i = ln To 1 Step -1
        j = j + 1
        tmp = CHAR_CNT ^ (i - 1) * tmpN(j)
        idx = idx + tmp
    Next i

    getColIdx = idx
End Function
~~~

-

### 整数值转换为Excel的列名

> 相关常量定义

~~~
' 字母的个数
Public Const CHAR_CNT As Integer = 26
~~~

> 函数定义

~~~
' 整数值转换成Excel的列名
'
'   功能：
'     整数值转换成Excel的列名
'
'   参数：
'     colIdx : 整数(2、52 等)
'
'   例：
'     52 => AZ
'     702 => ZZ
'     703 => AAA
'     731 => ABC
Public Function getColChr(colIdx As Integer)

    '循环变量
    Dim i As Integer
    '列名长数
    Dim ln As Integer
    
    '传入值内部变量
    Dim idx As Integer
    '余数
    Dim tail As Integer
    '列名各字母在字母表中的顺序
    Dim ch() As Integer
    
    '返回值
    Dim s As String
    
    idx = colIdx
    ln = 0
    
    Do
        ln = ln + 1
        ReDim Preserve ch(ln) As Integer
        
        '取余
        tail = idx Mod CHAR_CNT
       
        '整除的情况
        If tail = 0 Then
            '保留26
            ch(ln) = CHAR_CNT
            '先减去26, 再舍去小数部分取整
            idx = (idx - CHAR_CNT) \ CHAR_CNT
        '不能整除的情况
        Else
            '保留余数
            ch(ln) = tail
            '舍去小数部分取整
            idx = idx \ CHAR_CNT
        End If
       
    '除后值大于0时循环,即除前值大于等于26
    Loop While idx > 0
    
    'Ascii码转换为大写字符
    For i = 1 To ln
        s = chr(ch(i) + 65 - 1) & s
    Next i
    
    getColChr = s
End Function
~~~

-

### 下划线连接字符串转换为骆驼命名字符串

>  相关常量定义

~~~
' 下划线
Public Const S_UNDERBAR As String = "_"
~~~

> 函数定义

~~~
'下划线连接字符串转换为骆驼命名字符串
'
'  功能：
'    下划线连接字符串转换为骆驼命名字符串
'
'  参数：
'    s : 转换对象字符串
'
'  例：
'    abc_def_ghi => AbcDefGhi
Public Function uCaseWordHead(s As String)

    Dim i As Integer
    Dim arr() As String
    
    Dim head As String
    Dim tail As String
    Dim tmp As String
    
    '以下划线分隔为数组
    arr() = Split(s, S_UNDERBAR)
    
    '使用Split,数组起始下标为0
    For i = 0 To UBound(arr)
        tmp = arr(i)
        '首字母以外
        tail = Right(tmp, Len(tmp) - 1)
        '首字母大写
        head = UCase(Left(tmp, 1))
        
        arr(i) = head & tail
    Next i
    
    '字符数组转换成字符串
    uCaseWordHead = Join(arr, "")
End Function
~~~

-

### 骆驼命名字符串转换为下划线连接字符串

> 相关常量定义

~~~
' 下划线
Public Const S_UNDERBAR As String = "_"
~~~

> 函数定义

~~~
'骆驼命名字符串转换为下划线连接字符串
'
'  功能：
'    骆驼命名字符串转换为下划线连接字符串
'
'  参数：
'    s : 转换对象字符串
'
'  例：
'    AbcDefGhiZyx => abc_def_ghi_zyx
Public Function lCaseWordHeadUnderBar(s As String)
    
    Dim i As Integer
    
    Dim tmp As String
    Dim result As String
    
    For i = 1 To Len(s)
        tmp = Mid(s, i, 1)
        ' 判断是否大写
        If Asc(tmp) >= 65 And Asc(tmp) <= 90 Then
        
            '转换为小写
            tmp = LCase(tmp)
            
            '首字母以外,加下划线
            If i > 1 Then
                tmp = S_UNDERBAR & tmp
            End If
        End If
        
        result = result & tmp
    Next
    
    lCaseWordHeadUnderBar = result
End Function
~~~