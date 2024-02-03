---
title: Time.ToText
---

# Time.ToText


## Description

Vrátí textovou reprezentaci hodnoty času.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vrátí textovou reprezentaci <code>time</code>. Pro upřesnění dalších vlastností můžete zadat volitelný parametr <code>record</code>, <code>options</code>. <code>culture</code> se používá pouze pro starší pracovní postupy.<code>Record</code> může obsahovat následující pole:<ul>   <li><code>Format</code>: Hodnota typu <code>text</code> udávající formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty <code>null</code> způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí <code>Culture</code></li>.   <li><code>Culture</code>: Pokud nemá <code>Format</code> hodnotu null, řídí některé specifikátory formátu jazyková verze <code>Culture</code>. Například u <code>"en-US"</code> má <code>"tt"</code> hodnotu <code>"AM" nebo "PM"</code>, zatímco u <code>"ar-EG"</code> má <code>"tt"</code> hodnotu <code>"ص" nebo "م"</code>. Když má <code>Format</code> hodnotu <code>null</code>, řídí výchozí formát, který se má použít, hodnota<code>Culture</code>. Když má <code>Culture</code> hodnotu <code>null</code> nebo není zadaná, použije se <code>Culture.Current</code>.</li></ul>Pokud chcete podporovat starší pracovní postupy, můžou být <code>options</code> a <code>culture</code> také textové hodnoty. Chování bude stejné jako kdyby se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Převede řetězec &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; na hodnotu &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Převod pomocí standardního formátu času.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
