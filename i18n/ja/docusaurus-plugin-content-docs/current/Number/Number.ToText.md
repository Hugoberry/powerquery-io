---
title: Number.ToText
---

# Number.ToText


## Description

指定された数値をテキストに変換します。


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

<code>format</code> で指定された形式に従って、数値 <code>number</code> をテキスト値に変換します。<br />    <br />    形式は、数値の変換方法を示すテキスト値です。サポートされている形式の値の詳細については、https://go.microsoft.com/fwlink/?linkid=2241210 と https://go.microsoft.com/fwlink/?linkid=2240884 を参照してください。<br />    <br />     <code>format</code> のカルチャに依存する動作を制御するには、オプションの <code>culture</code> を指定することもできます (例: "en-US")。


## Examples

### Example #1 
形式を指定せずに数値をテキストに変換します。
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
数値を指数形式に変換します。
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
数値を小数点以下の桁数が 1 つだけのパーセント形式に変換します。
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
