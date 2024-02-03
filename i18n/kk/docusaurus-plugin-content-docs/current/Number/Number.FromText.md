---
title: Number.FromText
---

# Number.FromText


## Description

(&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;) жалпы мәтіндік пішімдерінен сандарды жасайды.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Берілген <code>text</code> мәтіндік мәнінен <code>number</code> мәнін қайтарады. <ul>  <li><code>text</code>: сандық мәннің мәтіндік көрінісі. Көрініс сандық пішімде болуы керек, мысалы, "15", "3423,10", "5,0E-10".</li>  <li><code>culture</code>: <code>text</code> қалай түсіндірілетінін басқаратын қосымша мәдениет (мысалы, "en-US").</li> </ul>


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt; сандық мәнін алу.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; сандық мәнін алу.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
