---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

지정한 <code>startDelimiter</code>과(와) <code>endDelimiter</code> 사이의 <code>text</code> 부분을 반환합니다.    선택적 숫자 <code>startIndex</code>은(는) 고려해야 하는 <code>startDelimiter</code>을(를) 나타냅니다.    선택적 목록 <code>startIndex</code>은(는) 고려해야 하는 <code>startDelimiter</code>과(와) 인덱싱을 입력의 처음부터 실행해야 하는지, 아니면 끝부터 실행해야 하는지를 나타냅니다.    <code>endIndex</code>은(는) 인덱싱이 <code>startIndex</code>을(를) 기준으로 실행된다는 점을 제외하고 비슷합니다.


## Examples

### Example #1 
(첫 번째) 여는 괄호와 이후에 오는 (첫 번째) 닫는 괄호 사이의 &#34;111 (222) 333 (444)&#34; 부분을 가져옵니다.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
두 번째 여는 괄호와 이후에 오는 첫 번째 닫는 괄호 사이의 &#34;111 (222) 333 (444)&#34; 부분을 가져옵니다.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
끝에서 두 번째 여는 괄호와 이후에 오는 두 번째 닫는 괄호 사이의 &#34;111 (222) 333 (444)&#34; 부분을 가져옵니다.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
