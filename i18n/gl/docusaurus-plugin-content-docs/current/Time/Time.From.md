---
title: Time.From
---

# Time.From


## Description

Crea unha hora a partir do valor indicado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Devolve un valor <code>time</code> a partir do <code>value</code> indicado. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").Se o valor <code>value</code> indicado é <code>null</code>, <code>Time.From</code> devolve <code>null</code>. Se o valor <code>value</code> indicado é <code>time</code>, devólvese <code>value</code>. Pódense converter a un valor <code>time</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: valor <code>time</code> a partir da representación textual. Consulte <code>Time.FromText</code> para obter máis información.</li>        <li><code>datetime</code>: compoñente de hora de <code>value</code>.</li>        <li><code>datetimezone</code>: compoñente de hora da data e hora locais equivalente de <code>value</code>.</li>        <li><code>number</code>: valor <code>time</code> equivalente ao número de fraccións de días expresado por <code>value</code>. Se <code>value</code> é negativo ou maior ou igual que 1, devólvese un erro.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Converter &lt;code&gt;0.7575&lt;/code&gt; nun valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Converter &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; nun valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
