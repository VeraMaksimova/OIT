<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<style type="text/css">
*{
    background-color:#FFA07A;
    color:white;
    text-align:center;
     text-transform:uppercase;
    font-size:20px;
}
table{
    margin-left: auto;
    margin-right:auto;
     
}
th{
    text-transform:uppercase;
    font-weight:300;
    padding:20px 60px;

}
td{
    
    text-transform:uppercase;
    padding:20px 60px;
    text-align:center;
}
</style>
</head>
<body>
<table style="border-collapse: collapse" >
<tr>

<th>Имя</th>
<th>Год рождения</th>
<th>Оценка</th>

</tr>
<xsl:for-each select="information">
<xsl:for-each select="uchenik">
   <xsl:sort select="year" />
<tr>
<td><xsl:value-of select="name_of_un"/></td>
<td><xsl:value-of select="ball"/></td>
<td><xsl:value-of select="plan"/></td>
<td><xsl:value-of select="city"/></td>
</tr>

<xsl:choose>
<xsl:when test="ball_1 = 6">
<tr>
<td style="color:green"><xsl:value-of select="name"/></td>
<td><xsl:value-of select="year"/></td>
<td><xsl:value-of select="ball_1"/></td>
</tr>
</xsl:when>
<xsl:when test="ball_1 &lt; 6">
<tr>
<td style="color:red"><xsl:value-of select="name"/></td>
<td><xsl:value-of select="year"/></td>
<td><xsl:value-of select="ball_1"/></td>
</tr>
</xsl:when>
<xsl:when test="ball_1 > 6">
<tr>
<td style="color:blue"><xsl:value-of select="name"/></td>
<td><xsl:value-of select="year"/></td>
<td><xsl:value-of select="ball_1"/></td>
</tr>
</xsl:when>


</xsl:choose>
</xsl:for-each>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>


