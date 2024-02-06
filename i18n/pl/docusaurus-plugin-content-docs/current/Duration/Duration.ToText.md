---
title: Duration.ToText
---

# Duration.ToText


Zwraca tekst w formie „d.g:m:s”.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Zwraca tekstową reprezentację w formie „dzień.godzina:minuty:sekundy” dla danej wartości czasu trwania <code>duration</code>. <ul>        <li><code>duration</code>: <code>Czas trwania</code>, dla którego jest obliczana reprezentacja tekstowa.</li>  <li><code>format</code>: <i>[opcjonalnie]</i> Przestarzałe, wartość inna niż null spowoduje zgłoszenie błędu.</li>      </ul>


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; na wartość tekstową.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
