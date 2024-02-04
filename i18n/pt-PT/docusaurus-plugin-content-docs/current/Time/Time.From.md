---
title: Time.From
---

# Time.From


## Description

Cria uma hora a partir do valor especificado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Devolve um valor <code>time</code> a partir do <code>value</code> especificado. Pode também ser fornecido um <code>culture</code> opcional (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>Time.From</code> devolve <code>null</code>. Se o <code>value</code> especificado for <code>time</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>time</code>:      <ul>        <li><code>text</code>: Um valor <code>time</code> da representação textual. Consulte <code>Time.FromText</code> para obter detalhes.</li>        <li><code>datetime</code>: o componente de hora de <code>value</code>.</li>        <li><code>datetimezone</code>: o componente de hora equivalente à Data/Hora local de <code>value</code>.</li>        <li><code>number</code>: um valor <code>time</code> equivalente ao número de dias inteiros e fracionais expresso por <code>value</code>. Se <code>value</code> for negativo ou maior ou igual a 1, é devolvido um erro.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Converter &lt;code&gt;0.7575&lt;/code&gt; num valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Converter &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; num valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
