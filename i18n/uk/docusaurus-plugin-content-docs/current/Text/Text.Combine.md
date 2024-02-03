---
title: Text.Combine
---

# Text.Combine


## Description

Об&#39;єднує список текстових значень в одне текстове значення.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Повертає результат об’єднання списку текстових значень (<code>texts</code>) у єдине текстове значення. Усі <code>Null-значення</code>, наявні в <code>texts</code>, ігноруються.    Можна вказати додатковий <code>separator</code>, що використовуватиметься в остаточному об’єднаному тексті.


## Examples

### Example #1 
Об&#39;єднати текстові значення &#34;Seattle&#34; і &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Об’єднайте текстові значення &#34;Seattle&#34; і &#34;WA&#34;, розділивши їх комою з пробілом.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Об’єднує значення &#34;Seattle&#34;, &lt;code&gt;Null&lt;/code&gt; і &#34;WA&#34;, розділені комою з пробілом. (Зверніть увагу, що &lt;code&gt;Null-значення&lt;/code&gt; ігнорується.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
