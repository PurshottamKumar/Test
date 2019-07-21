
package com.rawat;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.rawat package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _FetchTableRecords_QNAME = new QName("http://rawat.com", "fetchTableRecords");
    private final static QName _FetchTableRecordsResponse_QNAME = new QName("http://rawat.com", "fetchTableRecordsResponse");
    private final static QName _AvgFinder_QNAME = new QName("http://rawat.com", "avgFinder");
    private final static QName _AvgFinderResponse_QNAME = new QName("http://rawat.com", "avgFinderResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.rawat
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link AvgFinder }
     * 
     */
    public AvgFinder createAvgFinder() {
        return new AvgFinder();
    }

    /**
     * Create an instance of {@link FetchTableRecords }
     * 
     */
    public FetchTableRecords createFetchTableRecords() {
        return new FetchTableRecords();
    }

    /**
     * Create an instance of {@link FetchTableRecordsResponse }
     * 
     */
    public FetchTableRecordsResponse createFetchTableRecordsResponse() {
        return new FetchTableRecordsResponse();
    }

    /**
     * Create an instance of {@link AvgFinderResponse }
     * 
     */
    public AvgFinderResponse createAvgFinderResponse() {
        return new AvgFinderResponse();
    }

    /**
     * Create an instance of {@link EmpTable }
     * 
     */
    public EmpTable createEmpTable() {
        return new EmpTable();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FetchTableRecords }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rawat.com", name = "fetchTableRecords")
    public JAXBElement<FetchTableRecords> createFetchTableRecords(FetchTableRecords value) {
        return new JAXBElement<FetchTableRecords>(_FetchTableRecords_QNAME, FetchTableRecords.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FetchTableRecordsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rawat.com", name = "fetchTableRecordsResponse")
    public JAXBElement<FetchTableRecordsResponse> createFetchTableRecordsResponse(FetchTableRecordsResponse value) {
        return new JAXBElement<FetchTableRecordsResponse>(_FetchTableRecordsResponse_QNAME, FetchTableRecordsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AvgFinder }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rawat.com", name = "avgFinder")
    public JAXBElement<AvgFinder> createAvgFinder(AvgFinder value) {
        return new JAXBElement<AvgFinder>(_AvgFinder_QNAME, AvgFinder.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AvgFinderResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rawat.com", name = "avgFinderResponse")
    public JAXBElement<AvgFinderResponse> createAvgFinderResponse(AvgFinderResponse value) {
        return new JAXBElement<AvgFinderResponse>(_AvgFinderResponse_QNAME, AvgFinderResponse.class, null, value);
    }

}
