---
title: Text.Combine
---

# Text.Combine


Объединяет список текстовых значений в одно текстовое значение.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Возвращает результат объединения списка текстовых значений <code>texts</code> в одно текстовое значение. Все значения <code>NULL</code>, существующие в <code>texts</code>, игнорируются.    Можно указать необязательный <code>separator</code>, используемый в итоговом объединенном тексте.


## Examples

### Example #1 
Объединить текстовые значения &#34;Seattle&#34; и &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Объединить текстовые значения &#34;Seattle&#34; и &#34;WA&#34;, разделенные запятыми и пробелом.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Объединить значения &#34;Seattle&#34;, &lt;code&gt;NULL&lt;/code&gt; и &#34;WA&#34;, разделенные запятой и пробелом. (Обратите внимание, что значение &lt;code&gt;NULL&lt;/code&gt; игнорируется.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
