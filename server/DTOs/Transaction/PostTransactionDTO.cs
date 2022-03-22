using System;
using System.ComponentModel.DataAnnotations;

namespace server.DTOs
{
    public record PostTransactionDTO
    {
        public DateTime date { get; init; }
        public float totalAmount { get; init; }
        public bool isPaid { get; init; }
        public string paymentMethod { get; init; }

        public string shippingAddress { get; set; }
    }
}