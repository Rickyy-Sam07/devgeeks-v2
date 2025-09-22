import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({
      currency: 'USD',
      country: 'US'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to detect location' },
      { status: 500 }
    )
  }
}