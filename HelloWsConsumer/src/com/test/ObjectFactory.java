
package com.test;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.test package. 
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

    private final static QName _GetMassege_QNAME = new QName("http://test.com/", "getMassege");
    private final static QName _GetMassegeResponse_QNAME = new QName("http://test.com/", "getMassegeResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.test
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GetMassegeResponse }
     * 
     */
    public GetMassegeResponse createGetMassegeResponse() {
        return new GetMassegeResponse();
    }

    /**
     * Create an instance of {@link GetMassege }
     * 
     */
    public GetMassege createGetMassege() {
        return new GetMassege();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetMassege }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://test.com/", name = "getMassege")
    public JAXBElement<GetMassege> createGetMassege(GetMassege value) {
        return new JAXBElement<GetMassege>(_GetMassege_QNAME, GetMassege.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetMassegeResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://test.com/", name = "getMassegeResponse")
    public JAXBElement<GetMassegeResponse> createGetMassegeResponse(GetMassegeResponse value) {
        return new JAXBElement<GetMassegeResponse>(_GetMassegeResponse_QNAME, GetMassegeResponse.class, null, value);
    }

}
