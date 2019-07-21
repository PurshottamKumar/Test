
package com.practice.jaxws;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "fetchTableRecordsResponse", namespace = "http://rawat.com")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "fetchTableRecordsResponse", namespace = "http://rawat.com")
public class FetchTableRecordsResponse {

    @XmlElement(name = "return", namespace = "")
    private List<com.practice.bean.EmpTable> _return;

    /**
     * 
     * @return
     *     returns List<EmpTable>
     */
    public List<com.practice.bean.EmpTable> getReturn() {
        return this._return;
    }

    /**
     * 
     * @param _return
     *     the value for the _return property
     */
    public void setReturn(List<com.practice.bean.EmpTable> _return) {
        this._return = _return;
    }

}
