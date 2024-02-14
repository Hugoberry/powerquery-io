---
title: Date.From
---

# Date.From


Cria uma data a partir do valor especificado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Retorna um valor <code>date</code> do <code>value</code> fornecido. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").Se o <code>value</code> fornecido for <code>null</code>, <code>Date.From</code> retorna <code>null</code>. Se o <code>value</code> fornecido for <code>date</code>, <code>value</code> será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor <code>date</code>:      <ul>        <li><code>text</code>: um <code>date</code> valor da representação textual. Consulte <code>Date.FromText</code> para obter detalhes.</li>        <li><code>datetime</code>: o componente de data do <code>value</code>.</li>         <li><code>datetimezone</code>: o componente de data do local datetime equivalente a <code>value</code>.</li>        <li><code>number</code>: o componente de data do equivalente datetime da Data de Automação OLE expresso por <code>value</code>.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro é retornado.


## Examples

### Example #1 
Converta &lt;code&gt;43910&lt;/code&gt; em um valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Converta &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; em um valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
