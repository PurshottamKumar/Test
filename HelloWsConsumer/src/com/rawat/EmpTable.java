
package com.rawat;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for empTable complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="empTable">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="deptno" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="empid" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="ename" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="loc" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "empTable", propOrder = {
    "deptno",
    "empid",
    "ename",
    "loc"
})
public class EmpTable {

    protected int deptno;
    protected int empid;
    protected String ename;
    protected String loc;

    /**
     * Gets the value of the deptno property.
     * 
     */
    public int getDeptno() {
        return deptno;
    }

    /**
     * Sets the value of the deptno property.
     * 
     */
    public void setDeptno(int value) {
        this.deptno = value;
    }

    /**
     * Gets the value of the empid property.
     * 
     */
    public int getEmpid() {
        return empid;
    }

    /**
     * Sets the value of the empid property.
     * 
     */
    public void setEmpid(int value) {
        this.empid = value;
    }

    /**
     * Gets the value of the ename property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEname() {
        return ename;
    }

    /**
     * Sets the value of the ename property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEname(String value) {
        this.ename = value;
    }

    /**
     * Gets the value of the loc property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLoc() {
        return loc;
    }

    /**
     * Sets the value of the loc property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLoc(String value) {
        this.loc = value;
    }

}
