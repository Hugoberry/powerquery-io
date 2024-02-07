---
title: DateTime.From
---

# DateTime.From


Cria um datetime a partir do valor especificado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Devolve um valor <code>datetime</code> a partir do <code>value</code> especificado. Pode também ser fornecida um <code>culture</code> opcional (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>DateTime.From</code> devolverá <code>null</code>. Se o <code>value</code> especificado for <code>datetime</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>datetime</code>:      <ul>        <li><code>text</code>: um valor <code>datetime</code> da representação textual. Consulte <code>DateTime.FromText</code> para obter detalhes.</li>        <li><code>date</code>: um <code>datetime</code> com <code>value</code> como componente de data e <code>12:00:00 AM</code> como componente de hora.</li>        <li><code>datetimezone</code>: o equivalente de <code>datetime</code> local de <code>value</code>.</li>        <li><code>time</code>: um <code>datetime</code> com o equivalente de data da Data de Automatização OLE <code>0</code> como componente de data e <code>value</code> como componente de hora.</li>        <li><code>number</code>: um equivalente de <code>datetime</code> da Data de Automatização OLE expresso por <code>value</code>. </li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Converter &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; num valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Converter &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; num valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
