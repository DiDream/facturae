'use strict';
const rawTemplate = `<fe:Facturae xmlns:fe="http://www.facturae.es/Facturae/2009/v3.2/Facturae" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.facturae.es/Facturae/2009/v3.2/Facturae">
  <FileHeader>
    <SchemaVersion>3.2</SchemaVersion>
    <Modality>I</Modality>
    <InvoiceIssuerType>EM</InvoiceIssuerType>
    <Batch>
      <BatchIdentifier>[ID_FACTURA]</BatchIdentifier>
      <InvoicesCount>[ITEMS_COUNT]</InvoicesCount>
      <TotalInvoicesAmount>
        <TotalAmount>[TOTAL]</TotalAmount>
      </TotalInvoicesAmount>
      <TotalOutstandingAmount>
        <TotalAmount>[TOTAL]</TotalAmount>
      </TotalOutstandingAmount>
      <TotalExecutableAmount>
        <TotalAmount>[TOTAL]</TotalAmount>
      </TotalExecutableAmount>
      <InvoiceCurrencyCode>EUR</InvoiceCurrencyCode>
    </Batch>
  </FileHeader>
  <Parties>
    <SellerParty>
      <TaxIdentification>
        <PersonTypeCode>J</PersonTypeCode>
        <ResidenceTypeCode>R</ResidenceTypeCode>
        <TaxIdentificationNumber>[CIF_EMPRESA]</TaxIdentificationNumber>
      </TaxIdentification>
      <LegalEntity>
        <CorporateName>[MY_NAME]</CorporateName>
        <RegistrationData/>
        <AddressInSpain>
          <Address>
          [COMPANY_ADDRESS]
          </Address>
          <PostCode>[COMPANY_CP]</PostCode>
          <Town>[COMPANY_CITY]</Town>
          <Province>[PROVINCIA]</Province>
          <CountryCode>ESP</CountryCode>
        </AddressInSpain>
        <ContactDetails>
          <Telephone>[TELEFONO]</Telephone>
          <ElectronicMail>[EMAIL_CONTACTO]</ElectronicMail>
          <ContactPersons>[PERSONA_CONTACTO]</ContactPersons>
        </ContactDetails>
      </LegalEntity>
    </SellerParty>
    <BuyerParty>
      <TaxIdentification>
        <PersonTypeCode>J</PersonTypeCode>
        <ResidenceTypeCode>R</ResidenceTypeCode>
        <TaxIdentificationNumber>[C_NIF]</TaxIdentificationNumber>
      </TaxIdentification>
	  <AdministrativeCentres>
		<AdministrativeCentre>
			<CentreCode>[F_CODE]</CentreCode>
			<RoleTypeCode>01</RoleTypeCode>
			<Name>[F_DESC]</Name>
			<AddressInSpain>
				<Address>C/ </Address>
				<PostCode>[CP_01]</PostCode>
				<Town>[CIUDAD_01]</Town>
				<Province>[PROVINCIA_01]</Province>
				<CountryCode>ESP</CountryCode>
			</AddressInSpain>
			<CentreDescription>[CF_NAME]</CentreDescription>
		</AdministrativeCentre>
		<AdministrativeCentre>
			<CentreCode>[R_CODE]</CentreCode>
			<RoleTypeCode>02</RoleTypeCode>
			<Name>[R_DESC]</Name>
			<AddressInSpain>
				<Address>C/ </Address>
				<PostCode>[CP_02]</PostCode>
				<Town>[CIUDAD_02]</Town>
				<Province>[PROVINCIA_02]</Province>
				<CountryCode>ESP</CountryCode>
			</AddressInSpain>
			<CentreDescription>[CR_NAME]</CentreDescription>
		</AdministrativeCentre>
		<AdministrativeCentre>
			<CentreCode>[P_CODE]</CentreCode>
			<RoleTypeCode>03</RoleTypeCode>
			<Name>[P_DESC]</Name>
			<AddressInSpain>
				<Address>C/ </Address>
				<PostCode>[CP_03]</PostCode>
				<Town>[CIUDAD_03]</Town>
				<Province>[PROVINCIA_03]</Province>
				<CountryCode>ESP</CountryCode>
			</AddressInSpain>
			<CentreDescription>[CP_NAME]</CentreDescription>
			</AdministrativeCentre>
		</AdministrativeCentres>
      <LegalEntity>
        <CorporateName>[C_NAME]</CorporateName>
        <RegistrationData/>
        <AddressInSpain>
          <Address>
          [C_ADDRESS]
          </Address>
          <PostCode>[CP]</PostCode>
          <Town>[CITY]</Town>
          <Province>[PROV]</Province>
          <CountryCode>ESP</CountryCode>
        </AddressInSpain>
        <ContactDetails>
          <ContactPersons>[CONTACT]</ContactPersons>
        </ContactDetails>
      </LegalEntity>
    </BuyerParty>
  </Parties>
  <Invoices>
    <Invoice>
      <InvoiceHeader>
        <InvoiceNumber>[NFACTURA]</InvoiceNumber>
        <InvoiceSeriesCode/>
        <InvoiceDocumentType>FC</InvoiceDocumentType>
        <InvoiceClass>OO</InvoiceClass>
      </InvoiceHeader>
      <InvoiceIssueData>
        <IssueDate>[FECHA_HOY]</IssueDate>
		<OperationDate>[FECHA_ENTREGA]</OperationDate>
		[PERIODO]
        <InvoiceCurrencyCode>EUR</InvoiceCurrencyCode>
        <TaxCurrencyCode>EUR</TaxCurrencyCode>
        <LanguageName>es</LanguageName>
      </InvoiceIssueData>
      <TaxesOutputs>
        <Tax>
          <TaxTypeCode>03</TaxTypeCode>
          <TaxRate>7.00</TaxRate>
          <TaxableBase>
            <TotalAmount>[IMPORTE]</TotalAmount>
          </TaxableBase>
          <TaxAmount>
            <TotalAmount>[TOTAL_IGIC]</TotalAmount>
          </TaxAmount>
          <EquivalenceSurchargeAmount>
            <TotalAmount>0.00</TotalAmount>
          </EquivalenceSurchargeAmount>
        </Tax>
      </TaxesOutputs>
      <InvoiceTotals>
        <TotalGrossAmount>[IMPORTE]</TotalGrossAmount>
        <TotalGrossAmountBeforeTaxes>[IMPORTE]</TotalGrossAmountBeforeTaxes>
        <TotalTaxOutputs>[TOTAL_IGIC]</TotalTaxOutputs>
        <TotalTaxesWithheld>0.00</TotalTaxesWithheld>
        <InvoiceTotal>[TOTAL]</InvoiceTotal>
        <TotalOutstandingAmount>[TOTAL]</TotalOutstandingAmount>
        <TotalExecutableAmount>[TOTAL]</TotalExecutableAmount>
      </InvoiceTotals>
      <Items>


        <InvoiceLine>
          <IssuerTransactionReference/>
          <ItemDescription> [CONCEPTO_01] </ItemDescription>
          <Quantity>[CANTIDAD_01]</Quantity>
          <UnitOfMeasure>01</UnitOfMeasure>
          <UnitPriceWithoutTax>[IMPORTE_01]0000</UnitPriceWithoutTax>
          <TotalCost>[IMPORTE_01]0000</TotalCost>
          <GrossAmount>[IMPORTE_01]0000</GrossAmount>
          <TaxesOutputs>
            <Tax>
              <TaxTypeCode>03</TaxTypeCode>
              <TaxRate>7.00</TaxRate>
              <TaxableBase>
                <TotalAmount>[IMPORTE_01]</TotalAmount>
              </TaxableBase>
              <TaxAmount>
                <TotalAmount>[TOTAL_IGIC_01]</TotalAmount>
              </TaxAmount>
              <EquivalenceSurchargeAmount>
                <TotalAmount>0.00</TotalAmount>
              </EquivalenceSurchargeAmount>
            </Tax>
          </TaxesOutputs>
          <AdditionalLineItemInformation/>
        </InvoiceLine>

        <InvoiceLine>
          <IssuerTransactionReference/>
          <ItemDescription> [CONCEPTO_02] </ItemDescription>
          <Quantity>[CANTIDAD_02]</Quantity>
          <UnitOfMeasure>01</UnitOfMeasure>
          <UnitPriceWithoutTax>[IMPORTE_02]0000</UnitPriceWithoutTax>
          <TotalCost>[IMPORTE_02]0000</TotalCost>
          <GrossAmount>[IMPORTE_02]0000</GrossAmount>
          <TaxesOutputs>
            <Tax>
              <TaxTypeCode>03</TaxTypeCode>
              <TaxRate>7.00</TaxRate>
              <TaxableBase>
                <TotalAmount>[IMPORTE_02]</TotalAmount>
              </TaxableBase>
              <TaxAmount>
                <TotalAmount>[TOTAL_IGIC_02]</TotalAmount>
              </TaxAmount>
              <EquivalenceSurchargeAmount>
                <TotalAmount>0.00</TotalAmount>
              </EquivalenceSurchargeAmount>
            </Tax>
          </TaxesOutputs>
          <AdditionalLineItemInformation/>
        </InvoiceLine>


      </Items>
      <PaymentDetails>
        <Installment>
          <InstallmentDueDate>[FECHA_HOY]</InstallmentDueDate>
          <InstallmentAmount>[TOTAL]</InstallmentAmount>
          <PaymentMeans>04</PaymentMeans>
          <AccountToBeCredited>
            <IBAN>[IBAN_ABONO]</IBAN>
          </AccountToBeCredited>
        </Installment>
      </PaymentDetails>
      <AdditionalData>
        <InvoiceAdditionalInformation>Facturae generado por los alumnos de la ULL</InvoiceAdditionalInformation>
      </AdditionalData>
    </Invoice>
  </Invoices>
</fe:Facturae>`;
const linesTemplate = rawTemplate.split("\n");
const keysTemplate = (function parseTemplate(lines){
  let keys = {};
  lines.forEach( (line, lineNumber) => {
    let key = line.match(/\[(\w+)\]/);
    if (key) {
      key = key[1]; // quedarse con el nombre

      /*
      (keys[key])? keys[key].push(lineNumber) : keys[key] = [lineNumber];
      */

      // para el caso de no haber claves repetidas...
      keys[key] = lineNumber;

    }
  });
  return keys;
})(linesTemplate);

const $separator = $('#separator');

$('#uploader-input').on('change', function(){
  const file = this.files[0];

  if (file){
    let r = new FileReader();

    r.onload = function(e){
      const csv = e.target.result;
      const separator = $separator.val() != ''? $separator.val() : ',';
      try {
        const invoicesInfo = csv2json(csv, { separator })

        let zip = new JSZip();
        invoicesInfo.forEach( (invoiceInfo, invoiceNumber) => {
          let invoice = [...linesTemplate];

          Object.keys(invoiceInfo).forEach(key => {
            if (keysTemplate[key]) {
              let line = keysTemplate[key];
              invoice[line] = invoice[line].replace(`[${key}]`, invoiceInfo[key]);
            }
          })


          zip.file(`facturae_${invoiceNumber+1}.csv`, invoice.join("\n"));
        });

        /* DESCARGAR EL ZIP */
        zip.generateAsync({
          type: "blob"
        }).then(function(blob) {

          // LIBRERÍA FileSaver.js
          saveAs(blob, "facturas.zip");
        }, function(err) {
          console.log('error al crear la descarga.');
        });

      }
      catch(err) {
        console.error('HA OCURRIDO UN ERROR AL PROCESAR EL FICHERO');
        console.error(err);
      }
    }
    r.readAsText(file);
  }
});
