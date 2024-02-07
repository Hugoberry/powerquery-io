---
title: DateTime.From
---

# DateTime.From


Cria um valor datetime a partir do valor especificado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Retorna um valor <code>datetime</code> do <code>value</code> fornecido. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").Se o <code>value</code> fornecido for <code>null</code>, <code>DateTime.From</code> retorna <code>null</code>. Se o <code>value</code> fornecido for <code>datetime</code>, <code>value</code> será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor <code>datetime</code>:      <ul>        <li><code>text</code>: A <code>datetime</code> valor da representação textual. Consulte <code>DateTime.FromText</code> para obter detalhes.</li>        <li><code>date</code>: um <code>datetime</code> com <code>value</code> como o componente de data e <code>12:00:00 AM</code> como o componente de hora.</li>        <li><code>datetimezone</code>: o <code> local datetime</code> equivalente a <code>value</code>.</li>        <li><code>time</code>: A <code>datetime</code> com o equivalente de data da automação OLE Data de <code>0</code> como componente de data e <code>value</code> como componente de hora.</li>        <li><code>number</code>: um <code>datetime</code> equivalente à Data de Automação OLE expressa por <code>value</code>. </li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Converta &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; em um valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Converta &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; em um valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
