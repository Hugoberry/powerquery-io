---
title: Time.FromText
---

# Time.FromText


## Description

Vytvoří časovou hodnotu z místního, univerzálního a vlastního časového formátu.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Vytvoří hodnotu <code>time</code> z textové reprezentace <code>text</code>. Pro upřesnění dalších vlastností můžete zadat volitelný parametr <code>record</code>, <code>options</code>. <code>Record</code> může obsahovat následující pole:<ul>   <li><code>Format</code>: Hodnota typu <code>text</code> udávající formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty <code>null</code> způsobí, že se datum čas podle nejvhodnějšího postupu.</li>   <li><code>Culture</code>: Pokud nemá <code>Format</code> hodnotu null, řídí některé specifikátory formátu jazyková verze <code>Culture</code>. Například u <code>"en-US"</code> má <code>"tt"</code> hodnotu <code>"AM" nebo "PM"</code>, zatímco u <code>"ar-EG"</code> má <code>"tt"</code> hodnotu <code>"ص" nebo "م"</code>. Když má hodnota <code>Format</code> hodnotu <code>null</code>, řídí výchozí formát, který se má použít, jazyková verze <code>Culture</code>. Když má <code>Culture</code> hodnotu <code>null</code> nebo není zadaná, použije se <code>Culture.Current</code>.</li></ul>Pokud chcete podporovat starší pracovní postupy, může být <code>options</code> také textová hodnota. Chování bude stejné jako kdyby se <code>options</code><code> = [Format = null, Culture= <code>options</code>]</code>.


## Examples

### Example #1 
Převede řetězec &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; na hodnotu Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Převést řetězec &lt;code&gt;&#34;1012&#34;&lt;/code&gt; na hodnotu Time
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Převést řetězec &lt;code&gt;&#34;10&#34;&lt;/code&gt; na hodnotu Time
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
