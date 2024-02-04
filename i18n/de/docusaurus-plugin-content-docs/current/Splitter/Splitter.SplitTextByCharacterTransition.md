---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Gibt eine Funktion zurück, die Text anhand eines Übergangs von einer Zeichenart in eine andere in eine Liste von Text aufteilt. Die Parameter &#34;\{0}&#34; und &#34;\{1}&#34; können entweder eine Liste mit Zeichen oder eine Funktion sein, die ein Zeichen verwendet und TRUE/FALSE zurückgibt.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Gibt eine Funktion zurück, die Text anhand eines Übergangs von einer Zeichenart in eine andere in eine Liste von Text aufteilt. Die Parameter "<code>before</code>" und "<code>after</code>" können entweder eine Liste mit Zeichen oder eine Funktion sein, die ein Zeichen verwendet und TRUE/FALSE zurückgibt.


## Examples

### Example #1 
Teilen Sie die Eingabe immer auf, wenn auf einen Groß- oder Kleinbuchstaben eine Ziffer folgt.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
