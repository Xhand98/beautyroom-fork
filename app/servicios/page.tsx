"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServiciosDesign() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de los servicios que tenemos para realzar tu belleza natural
          </p>
        </div>

        {/* filtros: search + select + toggle destacados */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <input
              className="w-full rounded-md border border-border bg-background px-4 py-2 pl-10"
              placeholder="Buscar servicios..."
              readOnly
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              className="rounded-md border border-border bg-white px-3 py-2 text-sm text-muted-foreground"
              aria-label="Filtrar categoría"
              defaultValue="all"
            >
              <option value="all">Todos</option>
              <option value="cortes">Cortes</option>
              <option value="color">Color</option>
              <option value="tratamientos">Tratamientos</option>
            </select>

            <Button variant="outline" size="sm" className="px-3">
              Solo destacados
            </Button>

            <Button variant="ghost" size="sm" className="px-3">
              Ordenar: Más populares
            </Button>
          </div>
        </div>

        {/* destacado arriba (visual) */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Servicios destacados</h2>
          <p className="text-sm text-muted-foreground">Estos son algunos de nuestros servicios más valorados.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-neutral-100 flex items-center justify-center text-neutral-400">
                Imagen
              </div>
              <CardContent className="p-6">
                {/* marcar los primeros 2 como destacados visualmente */}
                <div className="flex items-start justify-between">
                  {i < 2 ? (
                    <Badge className="mb-3 bg-amber-100 text-amber-800">Destacado</Badge>
                  ) : (
                    <Badge className="mb-3">Categoría</Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold">Nombre del servicio</h3>
                <p className="mt-2 text-muted-foreground">Breve descripción del servicio que explica lo esencial.</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$45</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">45 min</span>
                </div>

                {/* Removed Agendar Cita button — area now focused on destacados / info */}
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Ver detalles y reseñas para más información.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
