type InvoiceEditProps = {
  params: Promise<{id: string}>
}

import { notFound } from 'next/navigation';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';


const EditInvoicePage = async ({params}: InvoiceEditProps) => {
  const {id} = await params;

  const [invoice, customers] =  await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers()
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  )
}

export default EditInvoicePage;
