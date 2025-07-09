'use client';


import { Button } from '@/app/ui/button';
import { deleteInvoice } from '@/app/lib/actions';

export default function DeleteInvoiceForm({ id }: { id: string }) {
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await deleteInvoice(id);
  };

  return (
    <form onSubmit={handleDelete} className="inline">
      <Button type="submit" className="bg-red-600 hover:bg-red-700 focus-visible:outline-red-600">
        Delete
      </Button>
    </form>
  );
}
