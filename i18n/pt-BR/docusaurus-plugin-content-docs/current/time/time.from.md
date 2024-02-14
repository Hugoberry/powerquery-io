---
title: Time.From
---

# Time.From


Cria uma hora a partir do valor especificado.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Retorna um valor <code>time</code> com base no <code>value</code> especificado. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>Time.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>time</code>, <code>value</code> será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor <code>time</code>:      <ul>        <li><code>text</code>: um valor <code>time</code> da representação textual. Confira <code>Time.FromText</code> para obter informações detalhadas.</li>        <li><code>datetime</code>: o componente de hora do <code>value</code>.</li>        <li><code>datetimezone</code>: o componente de hora do equivalente de datetime local <code>value</code>.</li>        <li><code>number</code>: um equivalente de <code>time</code> para o número de dias fracionários expressos por <code>value</code>. Se <code>value</code> for negativo ou superior ou igual a 1, um erro será retornado.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Converta &lt;code&gt;0.7575&lt;/code&gt; em um valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Converta &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; em um valor &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
