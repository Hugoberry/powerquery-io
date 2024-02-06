---
title: Time.ToText
---

# Time.ToText


Restituisce una rappresentazione testuale del valore di ora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Restituisce una rappresentazione testuale di <code>time</code>. Per specificare proprietà aggiuntive, è possibile fornire un parametro facoltativo <code>record</code> <code>options</code>. <code>culture</code> viene usato solo per i flussi di lavoro legacy. Il <code>record</code> può contenere i campi seguenti:<ul>   <li><code>Formato</code>: un valore <code>text</code> che indica il formato da usare. Per maggiori dettagli, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica <code>Null</code>, verrà eseguita la formattazione della data usando l'impostazione predefinita, definita da <code>Impostazioni cultura</code>.</li>   <li><code>Impostazioni cultura</code>: se <code>Formato</code> non è Null, <code>Impostazioni cultura</code> controlla alcuni identificatori di formato. Ad esempio, in <code>"en-US"</code> <code>"tt"</code> è <code>"AM" o "PM"</code>, mentre in <code>"ar-EG"</code> <code>"tt"</code> è <code>"ص", o "م"</code>. Quando <code>Formato</code> è <code>Null</code>, <code>Impostazioni cultura</code> controlla il formato predefinito da usare. Quando <code>Culture</code> è <code>Null</code> od omesso, viene usato <code>Culture.Current</code>.</li></ul>Per supportare flussi di lavoro legacy <code>options</code> e <code>culture</code> possono essere anche valori di testo. Questo comportamento è identico a quello se <code>options</code><code>= [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertire &lt;code&gt;#date(01, 30, 25)&lt;/code&gt; in un valore &lt;code&gt;text&lt;/code&gt;. &lt;i&gt; L&#39;output dei risultati può variare a seconda delle impostazioni cultura correnti.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Eseguire la conversione usando il formato dell&#39;ora solare.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
