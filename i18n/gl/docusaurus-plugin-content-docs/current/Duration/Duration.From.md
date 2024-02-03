---
title: Duration.From
---

# Duration.From


## Description

Crea unha duración a partir do valor indicado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Devolve un valor <code>duration</code> a partir do <code>value</code> indicado. Se o valor <code>value</code> é <code>null</code>, <code>Duration.From</code> devolve <code>null</code>.  Se o valor <code>value</code> é <code>duration</code>, devólvese <code>value</code>. Pódense converter a un valor <code>duration</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: un valor <code>duration</code> das formas textuais de tempo transcorrido (d.h:m:s). Consulte <code>Duration.FromText</code> para obter máis información.</li>        <li><code>number</code>: un <code>duration</code> equivalente ao número de días enteiros e fraccionarios expresado por <code>value</code>.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Converter &lt;code&gt;2.525&lt;/code&gt; nun valor &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
