# 6. Excel对象

## 6.1 集合

### 6.1.1 集合对象

> Excel中有很多集合，代表一组相同的对象，例如：
> 
> * Axes : 图表中所有坐标轴对象的集合  
> * Workbooks : 所有打开的工作簿的集合
> * 等等

### 6.1.2 集合引用

> 用法：  

~~~
集合("对象名称") 或者 集合(对象索引)
~~~

> 例：  

~~~
Worksheets("sheetBS")
~~~

~~~
Worksheets(1)
~~~

### 6.1.3 集合属性、集合方法

> Count属性  
> Item方法  
> Add方法  

~~~
Dim cnt As Integer
cnt = ActiveWorkbook.Worksheets.Count
~~~

~~~
Dim wksheet As Object
Dim n As Integer
n = 2
Set wksheet = ActiveWorkbook.WorkSheets.Item(n)
~~~

~~~
Dim newSheet As Object
Set newSheet = ActiveWorkbook.WorkSheets.Add("sheetBeyond")
~~~

## 6.2 Excel对象

> 可在VBE中使用对象浏览器(F2)查看对象成员  

### 6.2.1 Application对象

> Application对象即Excel应用程序对象，该对象包括

> * 应用程序范围的设置和选项
> * 返回顶级对象的方法，如ActiveSheet等

### 6.2.2 Workbook对象

> Workbook对象对应一个Excel工作簿
> Workbook对象是Workbooks集合的成员
> ThisWorkbook即运行VBA的工作簿，大多数情况是活动工作簿

### 6.2.3 Worksheet对象

> Worksheet对象对应一个工作表
> Worksheet对象是Worksheets集合的成员，也是Sheets集合的成员


### 6.2.4 Range对象

> Range为单元格对象，代表某一单元格、某一行、某一列、某一区域(连续或非连续)，或某一三维区域  

> 返回Range对象的属性和方法 ：
> 
> * Worksheet对象的Range属性
> * Worksheet对象的Cells属性
> * Offset属性 : 已有Range对象的偏移区域
> * Union方法 : 两个或多个区域的合并区域

## 6.3 Applcation对象详细

### 6.3.1 属性

> Caption : 返回或设置Excel应用程序标题栏的内容  
> Cursor : 返回或设置鼠标指针状态  
> CellDragAndDrop : False则禁止拖动单元格
> DisplayAlerts : True则显示警告信息  
> DisplayFormulaBar : True则显示编辑栏  
> DiplayScrollBars : True则在所有工作簿中显示滚动条  
> DisplayStatusBar : True则显示状栏  
> RecentFiles : 显示最近使用的文档  
> ScreenUpdating : True则开启屏幕更新  
> StatusBar : 返回或设置状态栏中的文字  
> Visible : 返回或设置Excel对象是否可见  
> WindowState : 返回或设置窗口的状态  

> ActiveCell : 活动单元格  
> ActiveChart : 活动图表  
> ActiveSheet : 活动工作簿中的活动工作表  
> ActiveWindow : 活动窗口  
> ActiveWorkbook : 活动工作簿  
> Cells : Range对象，可指定行和列  
> Selection : 活动窗口中选中的对象  
> Sheets : 活动工作簿中的所有工作表  
> Workbooks : 所有打开的工作簿  
> WorksheetFunction : 在VBA中调用Excel函数的容器  

### 6.3.2 方法

> Calculate : 计算指定区域中的单元格  
> Evaluate : 将一个Excel名称转换为一个对象或一个值  
> Quit : 退出Excel程序  
> OnKey : 自定义功能键
> OnTime : 在特定时间后执行一个过程  
> SendKeys : 模拟键盘输入  
> Undo : 撤销最后一次操作，不能撤销VBA执行的处理  
> Union : 取得两个或多个区域的合并区域

### 6.3.3 事件

> NewWorkbokk : 新建工作簿时触发  
> SheetAcitve : 激活任何工作表时触发  
> SheetBeforeDoubleClick : 双击任何工作表时触发，在实际双击操作前触发  
> SheetChange : 用户或外部链接更改了任何工作表中的单元格时触发  
> SheetDeactive : 任何工作表被停用时触发  
> WindowActive : 工作簿被激活时触发  
> WindowDeacitve : 任何工作簿被激活时触发  
> WindowResize : 任何工作簿窗口调整大小时触发  
> WorkbookActive : 激活任何工作簿时触发  
> WorkbookBeforeClose : 任何打开的工作簿关闭前触发  
> WorkbookBeforeSave : 保存任何工作簿之前触发  
> WorkbookNewSheet : 在工作簿中新建工作表时触发  
> WorkbookOpen : 打开工作簿时触发  

### 6.3.4 实例

> 鼠标指针
> 
> * xlDefault : 默认指针
> * xlNorthwestArrow : 西北向箭头指针
> * xlWait : 沙漏型指针
> * xlIBeam : I型指针

~~~
Sub testSub()
  Application.Cursor = xlWait
  ...
  Application.Cursor = xlDefault
End Sub
~~~

> 屏幕刷新

~~~
Sub testSub()
  Application.ScreenUpdating = False  '不会实时显示处理中的画面改变
  ...
  Application.ScreenUpdating = True  '实时显示处理中的画面改变
  ...
End Sub
~~~

> DisplayAlerts控制警告信息

~~~
Sub testSub()
  Application.DisplayAlerts = False  '不会显示警告信息对话框
  ...
  Application.DisplayAlerts = True  '显示警告信息对话框
  ...
End Sub
~~~

> RecentsFiles显示最近使用的文档
> 
> * Maximum : 返回或设置最近使用文件列表的文件数上限(0-9)
> * Count : 最近使用文件列表中文件的数量

~~~
Sub testSub()
	Dim f As RecentFile
	
	For Each f In Application.RecentFiles
	  Debug.Pring "Recent File Name : " & f.Name
	Next
End Sub
~~~

> 用SendKeys方法模拟键盘输入
> 
> * Keys : 以文本形式发送给应用程序的按键或组合键(Ctrl/Alt/Shift)  
>          ~ ：表示Enter键
>          详细可参照帮助
> * Wait : True则等处理完按键后将控件返回给VBA，False则不等待继续运行VBA

~~~
Application.SendKeys(Keys, Wait)
~~~

~~~
Sub testSub()
	Dim valRtn As Double
	valRtn = Shell("NOTEPAD.EXE", 1)  '打开记事本
	AppActivate valRtn
	Application.SendKeys "~", True  '发送Enter回车
	Application.SendKeys "Beyond Warrior", True  '输入文本Beyond Warrior
End Sub
~~~

~~~
'激活选项卡
'激活 开始 选项卡(Alt + H)
Appliction.SendKeys("%h")
'上述方法会显示快捷键提示, 可再按F6隐藏提示, 使用激活 开始 选项卡
Application.SendKeys("&h{F6}") 
~~~

> OnTime定时执行
> 
> * 撤销定时运行需要将Schedule参数设置为False 
> * 如果找不到指定的过程会报错

~~~
'20秒后执行过程testSub
Application.OnTime Now + TimeValue("00:00:20"), "testSub"
~~~

~~~
'晚上10点执行过程shutdown
Application.OnTime TimeValue("22:00:00"), "shutdown"
~~~

~~~
'撤销晚上10点执行过程shutdown
Application.OnTime EarliestTime:=TimeValue("22:00:00"), Procedure:="shutdown", Schedule:=False
~~~

~~~
'整点报时
Sub showHour()
  Application.OnTime EarliestTime:=TimeSerial((Hour(Now) + 1) Mod 24, 0, 0), Procedure:="showHour"
  MsgBox "Now is " & Hour(now) & " hour."
End Sub
~~~

> OnKey自定义功能键
> 
> * Key : 按键的字符串，与SendKeys相同
> * Procedure : 要执行的过程名称的字符串，为空则不执行任何操作。省略则恢复Excel的默认设置

~~~
Application.OnKey(Key, Procedure)
~~~

~~~
Sub testSub()
  ' Alt + .执行subBeyond过程
  Application.OnKey "%.", "subBeyond"
  ' Alt + .不执行任何操作
  Application.OnKey "%.", ""
  ' 取消组合键Alt + .
  Application.OnKey "%."
End Sub
~~~

> WorksheetFunction调用内置函数

~~~
Sub testSub()
  Dim rng As Range
  Dim sum As Integer
  Set rng = ActiveSheet.Range("B2:D12")
  sum = Application.WorksheetFunction.Sum(rng)
End Sub
~~~

* WorksheetFunction.CountIf计算区域里满足条件的单元格的个数

> Goto跳转  
> Goto可以选择什么问题工作打开工作簿中的任意区域，该工作簿未处于活动状态时，则激活。该方法的Scroll属性，可让窗口滚动到指定位置

~~~
Sub testSub()
 Application.Goto Reference:=Worksheets("sheetBS").Range("B9:S12"), Scroll:=True
End Sub
~~~

> Union合并单元格
> 
> * 至少先择两个Range合并，最多可以合并30个Range

~~~
Application.Union(rng1, rng2, ..., rng30)
~~~

~~~
Sub testSub()
  Application.Union(Range("B9:C12"), Range("S10:V:20"))

End Sub
~~~

> GetOpenFilename打开对话框打开文件

~~~
Appliction.GetOpenFilename(FileFilter, FilterIndex, Title, ButtonText, MultiSelect)
~~~

> Application事件

~~~
'WorkbookBeforeSave事件
Private Sub App_WorkbookBeforeSave(ByVal wb As Workbook, ByVal SaveAsUI As Boolean, Cancel As Boolean)

End Sub
~~~

## 6.4 Workbook对象详细

### 6.4.1 属性

> AcitveSheet : 返回活动的工作表，没有则返回Nothing   
> Application : 返回Excel程序  
> Charts : 返回工作簿中所有图表工作簿  
> BuiltinDocumentProperties : 内置文档属性集合  
> DocumentProperties : 文档属性集合
> FullName : 返回对象名称(包括路径)  
> Name : 返回工作簿名称(不含路径)  
> Names : 返回所有名称对象  
> Password : 返回工作簿密码(打开时用)  
> Path : 返回应用程序的完整路径  
> ReadOnly : 返回工作簿是否以只读方式打开  
> Saved : 上次修改已保存，返回True;未保存返回False  
> Sheets : 返回指定工作簿中的所有工作表的集合  
> WorkSheets : 返回指定工作簿中的所有工作表的集合  
> Window : 返回指定工作簿中的所有窗口

### 6.4.2 方法

> Activate : 激活工作簿相关的第一个窗口  
> ChangeFileAccess : 更改工作簿的访问权限    
> Close : 关闭Workbook对象  
> Protect : 保护工作簿不被修改  
> Save : 保存工作簿的修改  
> SaveAs : 工作簿另存为  
> SaveCopyAs : 工作簿副本另存为  
> Unprotect : 对于受保护的工作簿或工作表， 取消工作簿或工作表的保护  

### 6.4.3 事件

> BeforeClose : 关闭工作簿前触发，若发生更改，在询问是否保存前触发  
> BeforePrint : 打印前触发  
> NewSheet : 新建工作表触发  
> Open : 打开工作簿触发  
> SheetActivate : 激活任何工作表时触发  
> SheetDeactivate : 停用任何工作表时触发  
> WindowActivate : 工作簿窗口激活时触发  
> WindowDeacitvate : 停用任何工作簿窗口时触发  
> WindowResize : 任何工作簿窗口调整大小时触发

### 6.4.4 Workbooks集合

> Add新建工作簿

~~~
Workbooks.Add
~~~

> Open打开工作簿

~~~
Workbooks.Open ("D:/BS.xlsx")
~~~

> OpenText打开文本
> 
> * Filename : 文本文件名，必须
> * 其它参数参照帮助

## 6.5 Worksheet对象详细

### 6.5.1 Worksheets方法

> Add : 新建工作表  
> Copy : 复制工作表到工作簿的另一位置  
> Delete : 删除集合中的指定工作表  
> Move : 移动工作表到工作簿的其它位置
> PrintOut : 打印输出工作表  
> PrintPreview :  打印预览工作表

### 6.5.2 Worksheet属性

> Cells : 返回Range对象，包含所有单元格  
> Comments : 返回指定工作表的所有注释  
> HPageBreaks/VPageBreaks : 工作表上的水平/垂直分页符
> Name : 返回或设置工作表的名称    
> Next : 返回后一个工作表  
> Previous : 返回前一个工作表  
> Range : 返回单元格或者单元格区域   
> ScrollArea :  以A1样式的区域引用形式返回或设置允许滚动的区域   
> UsedRange : 返回使用的区域  
> Visible : 设置工作表是否可见

### 6.5.2 Worksheet方法

> Activate : 激活工作表  
> Copy : 复制工作表  
> Delete : 删除工作表  
> Move : 移动工作表到指定位置
> Paste : 将剪贴板中的内容粘贴到工作表    
> Protect : 保护工作表不被修改  
> Unprotect : 解除受保护工作表的保护

### 6.5.3 Worksheet事件

> Activate : 激活时触发   
> BeforeDoubleClick : 双击时触发，先于默认的双击操作  
> BeforeRightClick :  右击时触发，先于默认的右击操作  
> Calculate : 工作表重新计算时发生此操作  
> Change : 更改工作表中单元格或外链引起单元格的更改时发生
> Deactivate : 图表或工作表被停用时触发   
> SelectionChange :  选定区域改变时触发  

### 6.5.4 运用

> Add  
> * Before : 指定工作表，新建工作表在此工作表之前  
> * After : 指定工作表，新建工作表在此工作表之后  
> * Count : 添加的工作表数  
> * Type : 工作表类型(xlWorksheet:工作表，xlChart(图表)，xlExcel4MacroSheet, xlExcel4IntlMacroSheet)  

~~~
Worksheets.Add(Before, After, Count, Type)
~~~

> Count/Activate/Delete/Previous/Next

~~~
Dim c As Integer
c = Worksheets.Count
Worksheets("SheetBS").Activate
Worksheets("SheetBS").Delete
ActiveSheet.Previous.Activate
ActiveSheet.Next.Activate
~~~

> Protect/Unprotect详细参照帮助

> Shapes 
> 
>  * msoAutoShape : 自选图形
>  * msoCallout : 标注
>  * msoCanvas : 画布
>  * msoChart : 图
>  * msoPicture : 图片
>  * ...

~~~
'删除图片
Sub deletePicture()
 Dim p As Shape
 For Each p In ActiveSheet.Shapes
   If p.Type = msoPicture Then p.Delte
 Next
End Sub
~~~

> Hyperlinks处理超链接
> 
>  * Anchor : Object,超链接的位置，可以是Range或Shape对象  
>  * Address : 超链接的地址
>  * SubAddress : 超链接的子地址  
>  * ScreenTip : 鼠标悬停在链接上时显示的提示  
>  * TextToDisplay : 超链接的文本  

~~~
WorkSheet对象.Add(Anchor, Address, SubAddress, ScreenTip, TextToDisplay)
~~~

> 删除超链接
~~~
Sub deletHlinks()
  Dim h As Hyperlink, hs As Hyperlinks
  Set hs = ActiveSheet.Hyperlinks
  For Each h In hs
    h.Delete
  Next
End Sub
~~~

> 其它操作
> 
> * SelectionChange事件可禁止选中某个区域
> * ScrollArea属性可设置滚动区域
> * CountIf函数可禁止输入相同数据
> * BeforeRightClick事件可增加右键菜单
> * Deactivate事件可限制选择其它工作表
> * Activate事件可隐藏工作表
> * Interior指对象的内部，可用于设置对象内部的格式

## 6.6 Range对象详细

### 6.6.1 属性

> ActiveCell : 当前工作表的活动单元格  
> Address : 返回Range对象的引用地址  
> Borders : 返回或设置表示样式或单元格区域的边框  
> Characters : 返回文本内某个区域的字符，可为文本字符串内的字符设置格式  
> Columns : 返回指定区域的列  
> ColumnWidth : 返回或设置指定区域的列宽  
> CurrentRegiaon : 返回当前区域  
> End : 返回区域末端的单元格  
> Font : 返回指定对象的字体  
> Formula : 返回或设置单元格的公式  
> HasFormula : 返回指定区域是否包含公式  
> Height : 返回或设置单元格的高度  
> NumberFormat : 返回或设置单元格的格式代码  
> PrintArea : 设置打印区域  
> Rows : 返回指定区域的行  
> ScrollArea : 单元格滚动范围
> Text : 返回或设置单元格中显示的文本  
> Value : 返回指定单元格的值  
> Width : 返回单元格的宽度  

### 6.6.2 常用方法

> Activate : 激活单元格  
> AddComment : 添加批注(注释)  
> AutoFormat : 自动套用格式  
> AutoFit : 更改区域中的列宽或行高以达到最佳匹配  
> Clear : 清除Range对象的中的内容  
> ClearComments : 清除指定区域的所有单元格批注  
> ClearContents : 清除区域中的公式  
> ClearFormats : 清除对象的格式设置  
> Copy : 将单元格区域复制到指定区域或剪切板中  
> Delete : 删除指定的Range对象，xlShiftToLeft(左移), xlShiftUp(上移)
> Find : 在区域中查找  
> Insert : 插入单元格或区域  
> Merge : 合并单元格  
> PasteSpecial : 粘贴特殊内容，如公式、批注等  
> Select : 选择单元格对象  
> UnMerge : 取消合并单元格(拆分)

### 6.6.3 Range对象引用

> 单个单元格
> 多个单元格
> 整行或整列
> [B2]

> 使用A1样式引用

~~~
Worksheets("sheetBS").Range("B9")
Worksheets("sheetBS").Range("A1:B5")
Worksheets("sheetBS").Range("B2:C5, D3:E6, A10:S12")
~~~

> 使用Cells引用

~~~
Cells(9, 12)
Cells(2, "S")
~~~

> 使用Offset
> 返回一个指定位置偏移位置上的区域
> 
> * RowOffset : 行偏移，正数为下移，负数为上移，默认是0  
> * ColumnOffset : 列偏移，正数为右移，负数为左移，默认是0

~~~
Offset(RowOffset, ColumnOffset)
~~~

~~~
Range("B2").Offset(, -5)
Range("S9").Offset(2, 2)
~~~

> 整行/整行
> 
> * EntireColumn : 整行
> * EntireRow : 整列

~~~
Range("B5").EntireColumn  '第2列
Range("B5").EntireRow  '第5行
~~~

> 使用End
> 
> * Direction : xlDown向下，xlToLeft向左，xlToRight向右，xlUp向上

~~~
Range对象.End(Direction)
~~~

~~~
Range("B9").End(xlUp).Select  '选中B9单元格中B列顶端的单元格
~~~

> CurrentRegion/UsedRange
> 
> * CurrentRegion : 返回空行空列包围的区域
> * UsedRange : 使用区域，行或者列里有单元格有被使用的区域，如果 AB两列和第1行没有任何单元格被使用，则返回的Range里没有AB两列和第1行

> Intersect获取重叠区域引用  
> 该方法包含两个或多个重叠的矩形区域(2-30个)

> SpecialCells获取指定类型单元格  
> 返回与指定类型和值匹配的所有单元格
>   
> * Type : 要包含的单元格
>   * xlCellTypeAllFormatConditions : 含有条件格式的单元格  
>   * xlCellTypeAllValidation : 含有验证条件的单元格  
>   * xlCellTypeBlanks : 空单元格  
>   * xlCellTypeComments : 含有注释的单元格  
>   * xlCellTypeConstants : 含有常量的单元格  
>   * xlCellTypeFormulas : 含有公式的单元格  
>   * xlCellTypeLastCell : 已用区域的最后一个单元格  
>   * xlCellTypeSameFormatConditions : 含有相同格式的单元格  
>   * xlCellTypeSameValidation : 含有相同验证条件的单元格  
>   * xlCellTypeVisible : 所有可见的单元格  
> * Value : 可省略
>   * xlErrors : 错误值  
>   * xlLogical : 逻辑值  
>   * xlNumbers : 数值  
>   * xlTextValues : 文本

~~~
Range对象.SpecialCells(Type, Value)
~~~  

~~~
'已用区域的最后一个单元格
ActiveSheet.Cells.SpecialCells(xlCellTypeLastCell)
'设置了条件格式的单元格
ActiveSheet.Cells.SpecialCells(xlCellTypeAllFormatConditions)
~~~

> Areas引用合并区域的子区域
> 如需要操作合并区域的文本时

> Item引用区域内的单个单元格

~~~
'选定区域的第2行第3列
Range("B2:S9").Item(2,3)
Range("B2:S9")(2,3)
~~~

> 追踪公式单元格
> 
> * ShowPrecedents/ShowDependents ... 参照帮助  

### 6.6.4 行/列操作

> Comment : 批注，可用相关属性方法进行操作，详细参照帮助  
> ColumnWidth : 设置列宽  
> Hidden : True则隐藏  
> RowHeight : 返回或设置行高  
> 
> Insert
> 
~~~
Dim r As Long
r = Selecition.Row
ActiveSheet.Rows(r).Insert
~~~
~~~
Dim c As Long
c = Selecition.Cloumn
ActiveSheet.Columns(c).Insert
~~~

> Delete

~~~
Range("B2").EntireRow.Delete
~~~

### 6.6.5 单元格操作

> CVErr函数 : Application函数，为单元格设置错误值  
> IsError函数 : Application函数，判断错误类型  
> HorizontalAlignment/VerticalAlignment : 设置文本对齐格式(水平方向、垂直方向)
> InsertIndent : 返回或设置单元格文本缩进  
> Orientation : 返回或设置文本方向(向下/水平/向上/向下居中/任意角度)  
> WrapText : 返回或设置自动换行格式  
> ShrinkToFit : 返回或设置缩小字体填充  
> NumberFormatLocal : 设置日期格式，可用来生成大写金额    
> Pattern : 返回或设置单元格内部图案  
> PatternColor : 返回或设置单元格内部图案的颜色(RGB值)
> FormatConditions : 设置条件格式(高于平均值条件、空值条件、色阶、错误条件等)

## 6.7 其它Excel对象

### 6.7.1 Name名称管理

> Names是名称对象的集合
~~~
Names.Add Name:="nmBS", RefersTo:="sheetBS!$B$9:$S$12"
~~~

### 6.7.2 Window窗口对象

> EnableResize : True则可调整大小  
> WindowSate : 窗口状态，最大化、最小化、正常  
> SplitRow/SplitColumn : 拆分空格  
> Zoom : 设置窗口显示比例  
> DisplayHorizontalScrollBar : 水平滚动条  
> DisplayVerticalScrollBar : 垂直滚动条  
> DisplayWorkbooktabs : 工作表标签  
> GridlineColor : 返回或设置网格颜色(RGB值)  
> GridlineColorIndex : 返回或设置网格颜色(调色板中的索引)  
> 其它参照帮助

### 6.7.3 图表

> Charts集合操作图表工作表  
> ChartObjects操作工作表中的图表对象  

> Chart方法
> 
> * SetSourceData : 指定图表设置数据源区域  
> * Location : 转换图表类型  
> * ChartTitle : 获取图表标题  
> * SeriesCollection : 获取图表系列信息  
> * SetSourceData : 调整图表数据源  
> * CopyPicture : 将图表保存为图片  

> Chart事件
> 需要通过类模块来转换