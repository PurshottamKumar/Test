
package com.birla.ws;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.birla.ws package. 
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

    private final static QName _AddDigits_QNAME = new QName("http://ws.birla.com/", "addDigits");
    private final static QName _AddDigitsResponse_QNAME = new QName("http://ws.birla.com/", "addDigitsResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.birla.ws
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link AddDigits }
     * 
     */
    public AddDigits createAddDigits() {
        return new AddDigits();
    }

    /**
     * Create an instance of {@link AddDigitsResponse }
     * 
     */
    public AddDigitsResponse createAddDigitsResponse() {
        return new AddDigitsResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddDigits }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.birla.com/", name = "addDigits")
    public JAXBElement<AddDigits> createAddDigits(AddDigits value) {
        return new JAXBElement<AddDigits>(_AddDigits_QNAME, AddDigits.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddDigitsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://ws.birla.com/", name = "addDigitsResponse")
    public JAXBElement<AddDigitsResponse> createAddDigitsResponse(AddDigitsResponse value) {
        return new JAXBElement<AddDigitsResponse>(_AddDigitsResponse_QNAME, AddDigitsResponse.class, null, value);
    }

}
