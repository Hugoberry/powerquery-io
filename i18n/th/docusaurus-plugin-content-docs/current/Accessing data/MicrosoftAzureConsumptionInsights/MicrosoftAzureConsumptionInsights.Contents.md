---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

มีฟังก์ชันคิวรีขั้นสูง


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

มีฟังก์ชันคิวรีขั้นสูง


## Examples

### Example #1 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับสรุปข้อมูลระหว่าง 2017-5-1 ถึง 2017-6-15
```powerquery

      ให้    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลสรุประหว่าง 2017-5-1 ถึง 2017-6-15
```


### Example #2 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับข้อมูลสรุปสำหรับเดือนเมษายน 2017
```powerquery

      ให้    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2017-4-1 และ 2017-4-30
```


### Example #3 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับข้อมูลสรุปจากเดือนเมษายน 2017 จนถึงปัจจุบัน
```powerquery

      ให้    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2017-4-1 ถึง 2017-6-15
```


### Example #4 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับข้อมูลสรุปจากเดือนธันวาคมล่าสุดจนถึงเดือนกุมภาพันธ์นี้ 
```powerquery

      ให้    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2016-12-1 และ 2017-2-28
```


### Example #5 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับค่าธรรมเนียม Marketplace สำหรับ 18 เดือนที่แล้ว
```powerquery

      ให้    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2015-12-1 ถึง 2017-6 15
```


### Example #6 
สมมติว่าวันนี้คือ 2017-6-15 ให้รับค่าธรรมเนียมโดยละเอียดสำหรับเดือนมิถุนายน 2017 และเดือนพฤษภาคม 2017
```powerquery

      ให้    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2017-5-1 ถึง 2017-6-15
```


### Example #7 
สมมติว่าวันนี้คือ 03-07-2017 รับค่าธรรมเนียมโดยละเอียดสำหรับเดือนกรกฎาคม 2016
```powerquery

      ให้  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          ผลลัพธ์ = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      ใน     
          ผลลัพธ์
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 01-07-2016 และ 31-07-2016
```


### Example #8 
สมมติว่าวันนี้คือ 2017-7-13 ให้รับสรุปยอดดุลสำหรับเดือน 10 ที่ผ่านมาบวกกับ 13 วันของเดือนนี้
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ dataType = "Summaries", numberOfMonth = 10 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
ฟังก์ชันจะส่งกลับข้อมูลระหว่าง 2016-9-1 และ 2017-7-13
```



